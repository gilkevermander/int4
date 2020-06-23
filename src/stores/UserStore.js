import { decorate, observable, action } from "mobx";
import User from "../models/User";
import UserService from "../services/UserService";

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.users = [];
    this.usersService = new UserService({ firebase: this.rootStore.firebase });
    //this.loadAllUsers();
  }

  empty() {
    this.users = [];
  }

  loadContactsForUser = async (user) => {
    const contacts = await this.usersService.getContactsForUser(user);
    contacts.forEach((contact) => {
      this.updateUserFromServer(contact);
    });
    // await this.usersService.getMessagesForUser(
    //   user.id,
    //   this.onMessageAdded
    // );

  };

  loadContactsForUser2 = async (user) => {
    //parameter van dese functie

    return await this.usersService.getContactsForUser2(
      user.id,
      async (userId) => {
        console.log(userId)
        console.log("dit is het userId", userId);
        if (!userId) {
          console.log("het is gedelete dit userId", userId);
          this.groups.remove(userId);
        }
        // await this.loadGroup(userId.id);
        // await this.loadGroupUsers(userId.id);
        //die is een callback functie(de volgende)
        await this.usersService.getMessagesForUser(
          userId,
          this.onMessageAdded
        );
      }
    );
  };

  // loadMessagesForUser = async (user, me) => {//zonder me
  //   const gebruikersnaam = user.gebruikersnaam
  //   const messages = await this.usersService.getMessagesForUser(
  //     gebruikersnaam, this.onMessageAdded
  //   );
  //   console.log(user);
  //   console.log(messages);
  //   return messages
  // };

  loadMessagesForUser = async (user, me) => {//zonder me
    const gebruikersnaam = user.gebruikersnaam
    const gebruikersnaamMe = me.gebruikersnaam
    console.log(gebruikersnaam);
    console.log(gebruikersnaamMe);
    const messages = await this.usersService.getMessagesForUser(
      gebruikersnaam, gebruikersnaamMe, this.onMessageAdded
    );
    console.log(messages)
    return messages
  };

  loadMessagesForUser2 = async (user, me) => {//zonder me
    const gebruikersnaam = user.gebruikersnaam
    const gebruikersnaamMe = me.gebruikersnaam
    const messages = await this.usersService.getMessagesForUser2(
      gebruikersnaam, gebruikersnaamMe, this.onMessageAdded2
    );
    console.log(messages)
    return messages
  };


  // loadContactsForUser = async (user) => {
  //   const contacts = await this.usersService.getContactsForUser(user);
  //   contacts.forEach((contact) => {
  //     this.updateUserFromServer(contact);
  //   });
  //   await this.userService.getMessagesForUser(
  //     user.gebruikersnaam,
  //     this.onMessageAdded
  //   );
  // };

  onMessageAdded = async (json) => {
    this.rootStore.messageStore.updateMessageFromServer(json);
    
  };

  onMessageAdded2 = async (json) => {
    console.log(json);
    console.log(this.rootStore.messageStore.updateMessageFromServer(json))
    this.rootStore.messageStore.updateMessageFromServer(json);
    
  };

  createContactforUser = async (user, gebruikersnaam) => {
    const contact = await this.usersService.createContactForUser(
      user,
      gebruikersnaam
    );
    const contact2 = await this.usersService.createContactForUser2(
      user,
      gebruikersnaam
    );
    this.updateUserFromServer(contact);
    return this.resolveUser(contact.id);
  };

  loadAllUsers = async () => {
    const jsonUsers = await this.usersService.getAll();
    jsonUsers.forEach((json) => this.updateUserFromServer(json));
  };

  loadUser = async (id) => {
    const jsonUser = await this.usersService.getById(id);
    this.updateUserFromServer(jsonUser);
    return this.resolveUser(id);
  };

  loadUserGroups = async (id) => {
    const jsonGroups = await this.usersService.getById(id, "groups");
    this.updateUserFromServer({ id, groups: jsonGroups });
    return this.resolveUser(id);
  };

  createUser = async (user) => {
    await this.usersService.create(user);
  };

  // updateUser = async user => {
  //   const json = await this.usersService.update(user);
  //   this.updateUserFromServer(json);
  // };

  // deleteUser = async user => {
  //   const json = await this.usersService.delete(user);
  //   this.updateUserFromServer(json);
  // };

  updateUserFromServer(json) {
    let user = this.users.find((user) => user.id === json.id);
    if (!user) {
      user = new User({
        id: json.id,
        store: this.rootStore.userStore,
      });
    }
    if (json.isDeleted) {
      this.users.remove(user);
    } else {
      user.updateFromJson(json);
    }
    return user;
  }

  // resolveUsers = (userId) => {
  //   console.log(this.users)
  //   console.log(userId)
  //   console.log(this.users.find((user) => user.id === userId))
  //   this.users.find((user) => user.id === userId)
  // };

  resolveUser = (id) => this.users.find((user) => user.id === id);
  resolveUserg = (gebruikersnaamMe) => this.users.find((user) => user.gebruikersnaamMe === gebruikersnaamMe);

  addUser = (user) => {
    this.users.push(user);
  };

  searchUser = (search) =>
    this.users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
}

decorate(UserStore, {
  users: observable,
  addUser: action,
  updateUserFromServer: action,
  empty: action,
});

export default UserStore;
