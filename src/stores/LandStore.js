import { decorate, observable, action } from "mobx";
import Land from "../models/Land";
import LandService from "../services/LandService";

class LandStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.lands = [];
    this.landService = new LandService({
      firebase: this.rootStore.firebase,
    });
  }

  loadAllLands = async () => {
    const jsonLand = await this.landService.getAll();
    jsonLand.forEach((json) => this.updateLandFromServer(json));
  };

  loadLand = async (id) => {
    const jsonLand = await this.landService.getById(id);
    this.updateLandFromServer(jsonLand);
    this.loadLandVerhalen(id)
    return this.resolveLand(id);
  };

  // loadLandVerhalen = async (id) => {
  //   console.log('test')
  //   const jsonVerhalen = await this.landService.getVerhalenForLand(id);
  //   this.updateLandFromServer({ id, verhalen: jsonVerhalen });
  //   return this.resolveLand(id);
  // };

  loadLandVerhalen = async (id) => {
    console.log('test')
    const jsonVerhalen = await this.landService.getVerhalenForLand(id, this.onVerhaalAdded);
    console.log(jsonVerhalen);
    console.log(id);
    this.updateLandFromServer({ id, verhalen: jsonVerhalen });
    return this.resolveLand(id);
  };

  onVerhaalAdded = async (json) => {
    this.rootStore.verhaalStore.updateVerhaalFromServer(json);
  };

  updateLandFromServer(json) {
    let land = this.lands.find((land) => land.id === json.id);
    if (!land) {
      land = new Land({
        id: json.id,
        store: this.rootStore.landStore,
      });
      console.log('newland')
    }
    if (json.isDeleted) {
      this.lands.remove(land);
    } else {
      land.updateFromJson(json);
      console.log('bestaandland')
    }
    return land;
  }

  resolveLand = (id) => this.lands.find((land) => land.id === id);

  addLand = (land) => {
    this.lands.push(land);
  };

}

decorate(LandStore, {
  lands: observable,
  addLand: action,
  updateLandFromServer: action,
  empty: action,
});

export default LandStore;
