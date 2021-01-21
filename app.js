// getPokeData() --> is the API call to fetch info about a pokemon!
// create an error: if a textbox is empty || invalid pokemon name/id

/* GLOBAL VARIABLES */
let pokemon;
const pokeTextName = document.getElementById('pkmnName');
const pokeTextDexNo = document.getElementById('pkmnDexNo');
const pokeTextType = document.getElementById('pkmnType');

// uses 'pokemon' GV
function inputPokemon() {
    pokemon = prompt("Type a Pokemon's Name or Number").toLowerCase();
}

async function getPokeData() {
    const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, {});
    const pokeObj = await pokeData.json();
    pokeTextName.innerHTML = pokeObj.name;
    pokeTextDexNo.innerHTML = pokeObj.id;

    // HOW TO DIFFERENTIATE DUAL TYPED POKEMON TO SHOW UP:
    if(!pokeObj.types[1]) {
        pokeTextType.innerHTML = pokeObj.types[0].type.name;
    } else {
        pokeTextType.innerHTML = pokeObj.types[0].type.name + " / " + pokeObj.types[1].type.name;
    }

    // display the Pokemon:
    document.getElementById("image").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeObj.id}.svg`;
}

/** TODO:
 * 1. Error handling: if user input is not a valid Pokemon/Pokdex#
 * 2. re-format the buttons to be beside the data instead of below b/c scrolling is annoying
 * 3. 
 */