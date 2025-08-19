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

let completeDataset = [];
let creatureData = [];

async function fetchData() {
   const response = await fetch("https://rpg-creature-api.freecodecamp.rocks/api/creatures")
   const data = await response.json()
   completeDataset = data;
}
fetchData();

async function fetchCreatureData(id) {
   const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${id}`)
   const data = await response.json();
   console.log(completeDataset);
   creatureData = data;
    console.log("Creature Dataset: ",creatureData);
};

searchButton.addEventListener("click", () => {
    let searchValue = searchInput.value;
    if (completeDataset.some((e) => e.id == searchValue || e.name.toLowerCase() === searchValue.toLowerCase())) {
        fillCreatureData(searchValue);
    } else {
        alert("Creature not found")
    };
});

async function fillCreatureData(input) {
    await fetchCreatureData(input);
    await reset();
    creatureName.innerText = creatureData.name.toUpperCase();
    creatureId.innerText = `#${creatureData.id}`;
    weight.innerText = `Weight: ${creatureData.weight}`;
    height.innerText = `Height: ${creatureData.height}`;
    let creatureType = creatureData.types;
    creatureType.forEach(element => {
        types.innerHTML += `<span class="type ${element.name}">${element.name}</span>`
    });
    specialName.innerText = creatureData.special.name;
    specialDescription.innerText = creatureData.special.description;
    let creatureStats = creatureData.stats;
    console.log(creatureStats);
    hp.innerText = creatureStats[0].base_stat;
    attack.innerText = creatureStats[1].base_stat;
    defense.innerText = creatureStats[2].base_stat;
    specialAttack.innerText = creatureStats[3].base_stat;
    SpecialDefense.innerText = creatureStats[4].base_stat;
    speed.innerText = creatureStats[5].base_stat;
}

async function reset() {
    types.innerHTML = '';
} 