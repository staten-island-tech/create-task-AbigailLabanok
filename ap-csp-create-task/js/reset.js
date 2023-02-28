import { DOMSelectors } from "./DOM";
import { agentArr } from "./array";

function reset() {
  DOMSelectors.display.innerHTML = "";
  agentArr.length === 0;
  console.log(agentArr);
}

export { reset };
