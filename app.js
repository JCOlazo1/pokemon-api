// getPokeData() --> is the API call to fetch info about a pokemon!
// create an error: if a textbox is empty || invalid pokemon name/id

/* GLOBAL VARIABLES */
let pokemon;
const pkmnImage;
const pokeTextName = document.getElementById('pkmnName');
const pokeTextDexNo = document.getElementById('pkmnDexNo');
const pokeTextType = document.getElementById('pkmnType');

// uses 'pokemon' GV
function inputPokemon() {
    pokemon = prompt("Type a Pokemon's Name or Number");
}

async function getPokeData() {
    const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, {});
    const pokeObj = await pokeData.json();
    pokeTextName.innerHTML = pokeObj.name;
    pokeTextDexNo.innerHTML = pokeObj.id;
    pokeTextType.innerHTML = pokeObj.types[0].type.name;
    console.log(pokeObj);
}

/**TODO:
 * 2. make the display look nice
 * 2b. check out 'pokeapi-js-wrapper' --install it
 */ 