

/*
async function main() {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=150");
    const pokemonData = await pokemon.json();
    const characterListEl = document.querySelector(".character-list")
    console.log(pokemonData)


// Fetch details for each Pokémon in parallel
    const details = await Promise.all(
      pokemonData.results.map((character) =>
        fetch(character.url).then(res => res.json())
      )
    );


    characterListEl.innerHTML = pokemonData.results
    .map(
       (character) => 
        `<div class="character-card">
          <div class="character-card__container">
           <h3>${character.name}</h4>
            <p><b>power:</b> ${character.base_experience}</p>
            <p><b>type:</b> ${character.types.map(t => t.type.name).join(', ')}</p>
            <p><b>sprite:</b>${character.sprites}</p>
          </div>
        </div>`
    )
    .join("");
}

main()
*/

async function main() {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=150");
    const pokemonData = await pokemon.json();
    const characterListEl = document.querySelector(".character-list");

    // Fetch details for each Pokémon in parallel
    const details = await Promise.all(
      pokemonData.results.map((character) =>
        fetch(character.url).then(res => res.json())
      )
    );

    characterListEl.innerHTML = details
      .map(
        (character) => 
          `<div class="character__card">
            <div class="character__card--container">
              <h3>${character.name}</h3>
              <p><b>power:</b> ${character.base_experience}</p>
              <p><b>type:</b> ${character.types.map(t => t.type.name).join(', ')}</p>
              <img src="${character.sprites.front_default}" alt="${character.name}"/>
            </div>
          </div>`
      ).join("");
}
main();







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