import store from "../store.js";
import Gamedata from "../Models/Gamedata.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "https://official-joke-api.appspot.com/",
  timeout: 3000
});

class GameService {
  constructor() {
    console.log("GameService constructor loaded");
  }
  getApiGamedata() {
    _api
      .get("random_joke")
      .then(result => {
        let newGamedata = new Gamedata(result.data);
        store.commit("gamedata", newGamedata);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const service = new GameService();
export default service;
