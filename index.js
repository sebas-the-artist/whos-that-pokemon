


async function main() {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemonData = await pokemon.json();
    const characterListEl = document.querySelector(".character-list")
    console.log(pokemonData)

characterListEl.innerHTML = pokemonData.results
.map(
    (character) => `<div class="character-card">
    <div class="character-card__container">
       <h3>Pokémons's Name</h4>
        <p><b>power:</b>base_experience</p>
        <p><b>type:</b> type/types</p>
        <p><b>sprite:</b> <img src="" alt="pokémon naked" id="pokemonSprite" class="pokemon__img"></p>
    </div>
    </div>`
    )
    .join("");
}

main()



async function fetchData() {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok) {
        console.log("thats not gonna work big dog")
    }
    else{
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
        console.log(data)
    }
}




/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response))
    .catch(error => console.error(error));
    */