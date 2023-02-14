import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getAgent } from "./agent";

DOMSelectors.agentBtn.addEventListener("click", getAgent);


//https://stackoverflow.com/questions/13237421/how-to-generate-random-words-in-javascript