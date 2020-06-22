import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthService";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.authService = new AuthService({
      firebase: this.rootStore.firebase,
      onAuthStateChanged: this.onAuthStateChanged,
    });
  }

  login = async (email, password) => {
    return await this.authService.login(email, password);
  };
  logout = async () => {
    return await this.authService.logout();
  };

  // resetPassword = async (email) => {
  //   return await this.authService.resetPassword(email);
  // };

  register = async (user) => {
    const result = await this.authService.register(user);
    user.id = result.uid;
    //
    const newUser = this.rootStore.userStore.updateUserFromServer(user);

    await this.rootStore.userStore.createUser(newUser.asJson);
  };

  registerUser = async (user) => {
    const result = await this.authService.register(user);
    user.id = result.uid;

    const newUser = this.rootStore.userStore.updateUserFromServer(user);
    await this.rootStore.userStore.createUser(newUser.asJson);
  };

  // onAuthStateChanged = async (data) => {
  //   if (data) {
  //     console.log("ingelogd");
  //     const user = this.rootStore.userStore.updateUserFromServer(data);
  //     await this.rootStore.groupStore.loadGroupsForUser(user);
  //     await this.rootStore.userStore.loadContactsForUser(user);

  //     this.setCurrentUser(user);
  //   } else {
  //     console.log("niet ingelogd");
  //     this.setCurrentUser(undefined);
  //     this.rootStore.groupStore.empty();
  //     this.rootStore.userStore.empty();
  //     this.rootStore.messageStore.empty();
  //   }
  // };

  onAuthStateChanged = async (data) => {
    if (data) {
      console.log("ingelogd");
      const user = this.rootStore.userStore.updateUserFromServer(data);
      // await this.rootStore.groupStore.loadGroupsForUser(user);
      // await this.rootStore.userStore.loadContactsForUser(user);
      console.log(user)
      //await this.rootStore.userStore.loadContactsForUser(user);//2 wel of niet
      this.setCurrentUser(user);
      console.log(user);
    } else {
      console.log("niet ingelogd");
      this.setCurrentUser(undefined);
      this.rootStore.userStore.empty();
      this.rootStore.messageStore.empty();
      this.rootStore.landStore.empty();
      this.rootStore.souvenirStore.empty();
    }
  };

  setCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(UiStore, {
  currentUser: observable,
  setCurrentUser: action,
});

export default UiStore;
