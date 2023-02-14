import { DOMSelectors } from "./DOM";

const agentapi = "https://valorant-api.com/v1/agents";

async function getAgent() {
  var things = [
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
    "Kay/o",
    "Chamber",
    "Neon",
    "Fade",
    "Harbor",
  ];
  var thing = things[Math.floor(Math.random() * things.length)];
  console.log(thing);

  try {
    const response = await fetch(agentapi);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

export { getAgent };
