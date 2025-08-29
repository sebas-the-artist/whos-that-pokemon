fetchData()

async function fetchData() {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    if(!response.ok) {
        console.log("thats not gonna work big dog")
    }
    else{
        const data = await response.json()
        console.log(data)
    }
}


/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response))
    .catch(error => console.error(error));
    */