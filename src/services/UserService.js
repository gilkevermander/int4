import "firebase/firestore";

class UserService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }
  create = async (user) => {
    return await this.db.collection("users").doc(user.gebruikersnaam).set(user);
  };

  // create = async (user) => {
  //   return await this.db.collection("users").doc(user.email).set(user);
  // };

  getUserByGebruikersnaam = async (gebruikersnaam) => {
    const data = (await this.db.collection("users").doc(gebruikersnaam).get()).data();
    if (!data.id) {
      data.id = data.userId; // quick fix to make it compatible with koens db
    }
    return data;
  };

  getAll = async () => {
    const snapshot = await this.db.collection("users").get();
    return snapshot.docs
      .map((o) => o.data())
      .map((u) => {
        u.id = u.userId; // quick fix to make it compatible with koens db
        return u;
      });
  };

  getContactsForUser = async (user) => {
    const contacts = await this.db
      .collection("users")
      .doc(user.gebruikersnaam)
      .collection("contacts")
      .get();
    return contacts.docs.map((u) => u.data());
  };

  getContactsForUser2 = async (userId, onUserAdded) => {
    return await this.db
      .collectionGroup("contacts")
      .where("id", "==", userId)
      .onSnapshot(async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          console.log(change);
          if (change.type === "added") {
            const groupId = change.doc.ref.parent.parent;
            onUserAdded(groupId);
          }
        });
      });
  };

  // getMessagesForUser = async (gebruikersnaam, onMessageAdded) => {
  //   this.db
  //     .collectionGroup("messages")
  //     .where("gebruikersnaam", "==", gebruikersnaam)
  //     .orderBy("timestamp")
  //     .onSnapshot(async (snapshot) => {
  //       snapshot.docChanges().forEach(async (change) => {
  //         console.log(change);
  //         if (change.type === "added") {
  //           console.log(onMessageAdded(change.doc.data()));
  //           onMessageAdded(change.doc.data());
  //         }
  //       });
  //     });
  // };

  getMessagesForUser = async (gebruikersnaam, gebruikersnaamMe, onMessageAdded) => {
    this.db
      .collectionGroup("messages")
      .where("gebruikersnaamMe", "==", gebruikersnaam)
      .where("gebruikersnaam", "==", gebruikersnaamMe)
      .orderBy("timestamp")
      .onSnapshot(async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          console.log(change);
          if (change.type === "added") {
            onMessageAdded(change.doc.data());
          }
        });
      });
  };

  getMessagesForUser2 = async (gebruikersnaam, gebruikersnaamMe, onMessageAdded) => {
    this.db
      .collectionGroup("messages")
      .where("gebruikersnaam", "==", gebruikersnaamMe)
      .where("gebruikersnaamMe", "==", gebruikersnaam)
      .orderBy("timestamp")
      .onSnapshot(async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          console.log(change);
          if (change.type === "added") {
            onMessageAdded(change.doc.data());
          }
        });
      });
  };

  createContactForUser2 = async (user, gebruikersnaam) => {
    const contact = await this.getUserByGebruikersnaam(gebruikersnaam);
    console.log(contact)
    if (!contact) {
      throw new Error(`User ${gebruikersnaam} does not exist`);
    }
    await this.db
      .collection("users")
      .doc(contact.gebruikersnaam)
      .collection("contacts")
      .doc(user.gebruikersnaam)
      .set(contact);

    return contact;
  };

  createContactForUser = async (user, gebruikersnaam) => {
    const contact = await this.getUserByGebruikersnaam(gebruikersnaam);
    if (!contact) {
      throw new Error(`User ${gebruikersnaam} does not exist`);
    }
    await this.db
      .collection("users")
      .doc(user.gebruikersnaam)
      .collection("contacts")
      .doc(contact.gebruikersnaam)
      .set(contact);

    return contact;
  };
}

export default UserService;
