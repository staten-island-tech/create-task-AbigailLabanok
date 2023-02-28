import { DOMSelectors } from "./DOM";
import { agentArr } from "./array";

const agentapi = "https://valorant-api.com/v1/agents";

async function getAgent() {
  DOMSelectors.display.innerHTML = "";
  var names = [
    "Brimstone",
    "Phoenix",
    "Sage",
    "Sova",
    "Viper",
    "Cypher",
    "Reyna",
    "Killjoy",
    "Breach",
    "Omen",
    "Jett",
    "Raze",
    "Skye",
    "Yoru",
    "Astra",
    "KAY/O",
    "Chamber",
    "Neon",
    "Fade",
    "Harbor",
  ];
  var agent = names[Math.floor(Math.random() * names.length)];

  if (agentArr.includes(`${agent}`)) {
    console.log("already seen it");
  } else {
    console.log("new");

    console.log(agent);
    DOMSelectors.display.insertAdjacentHTML("beforeend", `<h2>${agent}</h2>`);

    try {
      const response = await fetch(agentapi);
      const data = await response.json();
      console.log(data);
      data.data
        .filter((element) => element.displayName.includes(agent))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<img class="agent-picture ${el.developerName}  " id="${el.displayName}" src="${el.fullPortrait}" alt="${el.displayName} card"/>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  }

  agentArr.push(`${agent}`);
  console.log(agentArr);
}

export { getAgent };
