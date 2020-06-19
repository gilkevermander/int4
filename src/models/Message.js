import { decorate, observable, action, computed } from "mobx";
import { v4 } from "uuid";

class Message {
  constructor({ id = v4(), store, content, date = new Date(), gebruikersnaam,gebruikersnaamMe, unread = false, userId }) {
    if (!store) {
      throw new Error("voorzie een store");
    }
    if (!userId) {
      throw new Error("A message must have a userId");
    }
    if (!content || content === "") {
      throw new Error("A message must have some content");
    }
    this.id = id;
    this.store = store;

    this.updateFromJson({
      content,
      date,
      unread,
      userId,
      gebruikersnaam,
      gebruikersnaamMe
    });

    this.store.addMessage(this);
  }

  create = async () => this.store.createMessage(this.asJson);

  update = async () => this.store.updateMessage(this.asJson);

  // setGroup(group) {
  //   if (this.group) {
  //     this.group.unlinkMessage(this);
  //   }
  //   if (group) {
  //     this.groupId = group.id;
  //     this.group.linkMessage(this);
  //   } else {
  //     this.groupId = null;
  //   }
  // }

  setUser(user) {
    if (this.user) {
      this.user.unlinkMessage(this);
    }
    if (user) {
      console.log(user);
      this.userId = user.id;
      this.user.linkMessage(this);
    } else {
      this.userId = null;
    }
  }

  // get group() {
  //   return this.store.rootStore.groupStore.resolveGroup(this.groupId);
  // }

  get user() {
    return this.store.rootStore.userStore.resolveUser(this.userId);
  }

  updateFromJson = ({
    content = undefined,
    date = undefined,
    userId = undefined,
    unread = undefined,
    gebruikersnaam = undefined,
    gebruikersnaamMe = undefined
  }) => {
    this.content = (content !== undefined) ? content : this.content;
    console.log(this.content)
    this.unread = (unread !== undefined) ? unread : this.unread;
    this.gebruikersnaam = (gebruikersnaam !== undefined) ? gebruikersnaam : this.gebruikersnaam;
    this.gebruikersnaamMe = (gebruikersnaamMe !== undefined) ? gebruikersnaamMe : this.gebruikersnaamMe;

    if (date instanceof Date) {
      date = date.toISOString();
    }
    this.date = (date !== undefined) ? new Date(date) : this.date;

    if (userId !== undefined) {
      this.setUser(this.store.rootStore.userStore.resolveUser(userId));
    }
  };

  get asJson() {
    return {
      id: this.id,
      content: this.content,
      date: this.date.toISOString(),
      userId: this.userId,
      unread: this.unread,
      gebruikersnaam: this.gebruikersnaam,
      gebruikersnaamMe: this.gebruikersnaamMe
    };
  }

  setUnread(value) {
    this.unread = value;
  }
}

decorate(Message, {
  userId: observable,
  gebruikersnaam: observable,
  gebruikersnaamMe: observable,
  unread: observable,
  setUnread: action,
  updateFromJson: action,
  asJson: computed,
  user: computed
});

export default Message;
