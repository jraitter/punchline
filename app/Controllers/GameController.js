import GameService from "../Services/GameService.js";
import store from "../store.js";

let categoryElem = document.getElementById("type");
let questionElem = document.getElementById("setup");
let answerElem = document.getElementById("punchline");
//Private
function _draw() {
  let currData = store.State.gamedata;
  categoryElem.innerText = currData.type;
  questionElem.innerText = currData.setup;
  answerElem.innerText = currData.punchline;
  answerElem.style.visibility = "hidden";
}

//Public
export default class GameController {
  constructor() {
    store.subscribe("gamedata", _draw);
    this.getApiGamedata();
  }
  getApiGamedata() {
    GameService.getApiGamedata();
  }
  showAnswer() {
    console.log("showAnswer method called");
    if (answerElem.style.visibility == "hidden") {
      answerElem.style.visibility = "visible";
    } else {
      answerElem.style.visibility = "hidden";
    }
  }
}
