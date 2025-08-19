const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const specialName = document.getElementById("special-name");
const specialDescription = document.getElementById("special-description");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const SpecialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

async function fetchData() {
   const response = await fetch("https://rpg-creature-api.freecodecamp.rocks/api/creatures")
   const data = await response.json()
   console.log(data);
}

fetchData();