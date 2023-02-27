import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getAgent } from "./agent";
import { reset } from "./reset";

function getCard() {
  getAgent();
}

DOMSelectors.agentBtn.addEventListener("click", getCard);
DOMSelectors.resetBtn.addEventListener("click", reset);

//https://stackoverflow.com/questions/13237421/how-to-generate-random-words-in-javascript
