import { decorate, observable, action, computed } from "mobx";

class Land {
  constructor({ id, store, ...json }) {
    this.id = id;
    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.verhalen = [];

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

  linkVerhaal(verhaal) {
    !this.verhalen.includes(verhaal) && this.verhalen.push(verhaal);
    !verhaal.lands.includes(verhaal) && verhaal.linkLand(this);
  }

  unlinkVerhaal(verhaal) {
    const index = this.verhalen.findIndex(test => test.id === verhaal.id);
    if (index !== -1) {
      this.verhalen.splice(index, 1);
    }
    verhaal.lands.includes(this) && verhaal.unlinkLand(this);
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
