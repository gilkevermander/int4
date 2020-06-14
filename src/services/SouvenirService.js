import "firebase/firestore";

class SouvenirService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  getAll = async () => {
    const snapshot = await this.db.collection("souvenirs").get();
    return snapshot.docs.map((o) => o.data());
  };

  getById = async (id) => {
    return (await this.db.collection("souvenirs").doc(id).get()).data();
  };

  createSouvenir = async (souvenir) => {
    const souvenirRef = await this.db.collection("souvenirs").doc(souvenir.id);
    await souvenirRef.set(souvenir);
    return souvenir;
  };
}

export default SouvenirService;
