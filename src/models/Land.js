import { decorate, observable, action, computed } from "mobx";

class Land {
  constructor({ id, store, ...json }) {
    this.id = id;
    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.souvenirs = [];

    this.updateFromJson(json);

    this.store.addLand(this);
  }

  updateFromJson = ({title = undefined, svg = undefined, verhalen = undefined}) => {
    this.title = (title !== undefined) ? title : this.title;
    this.svg = (svg !== undefined) ? svg : this.svg;
    if (verhalen !== undefined) {
      // unlink the old verhalen
      const oldVerhalen = this.verhalen.concat();
      oldVerhalen.forEach(verhaal => verhaal.unlinkLand(this));
      verhalen.forEach(verhaal => {
        this.store.rootStore.verhaalStore.updateVerhaalFromServer(verhaal).linkLand(this);
      });
    }
  };

  // get verhalen() {
  //   return this.verhalen.slice().sort((a, b) => a.naam - b.naam);
  // }

  linkSouvenir(souvenir) {
    !this.souvenirs.includes(souvenir) && this.souvenirs.push(souvenir);
    !souvenir.lands.includes(souvenir) && souvenir.linkLand(this);
  }

  unlinkSouvenir(souvenir) {
    const index = this.souvenirs.findIndex(test => test.id === souvenir.id);
    if (index !== -1) {
      this.souvenirs.splice(index, 1);
    }
    souvenir.lands.includes(this) && souvenir.unlinkLand(this);
  }
  
  get asJson() {
    return {
      id: this.id,
      title: this.title,
      svg: this.svg
    };
  }
}

decorate(Land, {
  lands: observable,
  updateFromJson: action,
  asJson: computed
});

export default Land;
