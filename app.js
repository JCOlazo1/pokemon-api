// getPokeData() --> is the API call to fetch info about a pokemon!
// create an error: if a textbox is empty || invalid pokemon name/id

/* GLOBAL VARIABLES */
let pokemon;
const pokeText = document.getElementById('pkmnData');

// uses 'pokemon' GV
function inputPokemon() {
    pokemon = prompt("Type a Pokemon's Name or Number");
}

async function getPokeData() {
    const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const pokeObj = await pokeData.json();
    pokeText.innerHTML = pokeObj.name;
    console.log('if you see this in console, code works!');
}

/**TODO:
 * 1. display ALL the data I want (name, type, pokedex #, abilities, stats->base_stat)
 * 2. make the display look nice
 * 3. github it
 */