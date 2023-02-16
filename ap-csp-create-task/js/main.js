import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getAgent } from "./agent";

function getCard() {
    getAgent();
}

DOMSelectors.agentBtn.addEventListener("click", getCard);


//https://stackoverflow.com/questions/13237421/how-to-generate-random-words-in-javascript