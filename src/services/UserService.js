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
    console.log(data);
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
