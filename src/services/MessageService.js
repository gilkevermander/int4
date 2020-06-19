import "firebase/firestore";

import { firestore } from "firebase/app";

class MessageService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  createMessage = async (message) => {
    console.log(message)
    message.timestamp = firestore.Timestamp.fromDate(new Date(message.date));
    await this.db
      .collection("users")
      .doc(message.gebruikersnaamMe)
      .collection("messages")
      .doc(message.gebruikersnaam)
      .set(message);
  };

  createMessageRound = async (message) => {
    console.log(message)
    message.timestamp = firestore.Timestamp.fromDate(new Date(message.date));
    await this.db
      .collection("users")
      .doc(message.gebruikersnaam)
      .collection("messages")
      .doc(message.gebruikersnaamMe)
      .set(message);
  };
  //hier kan ik nog es dezelfde functie doen maar omgekeerd he
}

export default MessageService;
