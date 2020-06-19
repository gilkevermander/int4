import { decorate, action, computed, observable } from "mobx";


class User {
  constructor({ id, store, messages = [], ...json }) {
    if (!store) {
      throw new Error("voorzie een store");
    }
    this.id = id;
    this.store = store;
    this.souvenirs= []
    this._messages = messages;
    this.updateFromJson(json);

    this.store.addUser(this);
  }

  linkMessage(message) {
    !this._messages.includes(message) && this._messages.push(message);
  }

  unlinkMessage(message) {
    const index = this._messages.findIndex(test => test.id === message.id);
    if (index !== -1) {
      this._messages.splice(index, 1);
    }
  }

  get messages() {
    return this._messages.slice().sort((a, b) => a.date - b.date);
  }

  get lastMessageContent() {
    return this.messages.length > 0
      ? this.messages[this.messages.length - 1].content
      : "";
  }

  create = async () => this.store.createUser(this.asJson);

  linkSouvenir(souvenir) {
    !this.souvenirs.includes(souvenir) && this.souvenirs.push(souvenir);
  }

  unlinkSouvenir(souvenir) {
    const index = this.souvenirs.findIndex((test) => test.id === souvenir.id);
    if (index !== -1) {
      this.souvenirs.splice(index, 1);
    }
  }

  // linkGroup(group) {
  //   !this.groups.includes(group) && this.groups.push(group);
  //   !group.users.includes(this) && group.linkUser(this);
  // }

  // unlinkGroup(group) {
  //   const index = this.groups.findIndex((test) => test.id === group.id);
  //   if (index !== -1) {
  //     this.groups.splice(index, 1);
  //   }
  //   group.users.includes(this) && group.unlinkUser(this);
  // }

  updateFromJson = ({
    voornaam = undefined,
    achternaam = undefined,
    gebruikersnaam = undefined,
    email = undefined,
  }) => {
    this.voornaam = voornaam !== undefined ? voornaam : this.voornaam;
    this.achternaam = achternaam !== undefined ? achternaam : this.achternaam;
    this.gebruikersnaam = gebruikersnaam !== undefined ? gebruikersnaam : this.gebruikersnaam;
    this.email = email !== undefined ? email : this.email;
  };

  get asJson() {
    return {
      id: this.id,
      voornaam: this.voornaam,
      achternaam: this.achternaam,
      gebruikersnaam: this.gebruikersnaam,
      email: this.email
    };
  }
}

decorate(User, {
  _messages: observable,
  messages: computed,
  updateFromJson: action,
  asJson: computed,
  souvenirs: observable,
  voornaam: observable,
  achternaam: observable,
  gebruikersnaam: observable,
  email: observable,
});

export default User;
