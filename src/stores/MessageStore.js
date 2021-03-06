import { decorate, observable, action } from "mobx";
import Message from "../models/Message";
import MessageService from "../services/MessageService";

class MessageStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.messages = [];
    this.messagesService = new MessageService({
      firebase: this.rootStore.firebase,
    });
  }
  empty() {
    this.messages = [];
  }

  // loadAllMessages = async () => {
  //   const jsonMessages = await this.messagesService.getAll();
  //   jsonMessages.forEach((json) => this.updateMessageFromServer(json));
  // };

  createMessage = async (message) => {
    await this.messagesService.createMessage(message);
    await this.messagesService.createMessageRound(message)
  };

  updateMessage = async (message) => {
    const json = await this.messagesService.update(message);
    this.updateMessageFromServer(json);
  };

  updateMessageFromServer(json) {
    
    let message = this.messages.find((message) => message.id === json.id);
    //hier ook
    if (!message) {
      message = new Message({
        id: json.id,
        store: this.rootStore.messageStore,
        userId: json.userId,
        content: json.content,
        unread: json.unread,
        gebruikersnaam: json.gebruikersnaam,
        gebruikersnaamMe: json.gebruikersnaamMe
      });
    }
    if (json.isDeleted) {
      this.messages.remove(message);
    } else {
      message.updateFromJson(json);
    }
    return message;
  }

  resolveMessage = (id) => this.messages.find((message) => message.id === id);

  addMessage = (message) => {
    console.log(message)
    this.messages.push(message);
    console.log(this.messages)
  };
}

decorate(MessageStore, {
  messages: observable,
  addMessage: action,
  updateMessageFromServer: action,
  empty: action,
});

export default MessageStore;
