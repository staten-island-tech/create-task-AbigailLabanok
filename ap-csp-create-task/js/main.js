import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getAgent } from "./agent";
import { reset } from "./reset";
import { instructions } from "./instructions";

DOMSelectors.agentBtn.addEventListener("click", getAgent);
DOMSelectors.resetBtn.addEventListener("click", reset);
DOMSelectors.instructionsBtn.addEventListener("click", instructions);

//https://stackoverflow.com/questions/13237421/how-to-generate-random-words-in-javascript
