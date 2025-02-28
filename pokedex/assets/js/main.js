// conectar com api pokedex
// https://pokeapi.co/api/v2/pokemon/
// https://pokeapi.co/api/v2/pokemon/1

pokemons = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
	const data = await response.json();
	return data;
};

catchPokemon = async (id) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await response.json();
	return data;
};

// const pokemonsList = pokemons();
// pokemonsList.then((data) => {
// 	const pokemons = data.results;
// 	const list = document.getElementById("pokemons");

// 	for (const [index, pokemon] of pokemons.entries()) {
// 		const item = document.createElement("li");
// 		item.className = "pokemon grass";
// 		item.innerHTML = `
// 			<span class="number">#00${index + 1}</span>
// 			<span class="name">${pokemon.name}</span>
// 			<div class="detail">
// 				<ol class="types">
// 					<li class="type">grass</li>
// 					<li class="type">poison</li>
// 				</ol>
// 				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg" />
// 			</div>
// 		`;
// 		list.appendChild(item);
// 	}
// });

// Modelo do curso
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function getDetailsPokemon(pokemon) {
	fetch(pokemon.url)
		.then((response) => response.json())
		.then((jsonBody) => {
			const types = jsonBody.types;
			console.log(types);
		})
		.catch((error) => console.log(error))
		.finally(() => console.log("Request finalizada"));
}

function convertPokemonToLi(index, pokemon) {
	console.log(pokemon);
	return `
        <span class="number">#00${index + 1}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg" />
        </div>
    `;
}

fetch(url)
	.then((response) => response.json())
	.then((jsonBody) => jsonBody.results)
	.then((pokemons) => {
		const list = document.getElementById("pokemons");
		for (const [index, pokemon] of pokemons.entries()) {
			const item = document.createElement("li");
			item.className = "pokemon grass";
			item.innerHTML = convertPokemonToLi(index, pokemon);
			list.appendChild(item);
		}
	})
	.catch((error) => console.log(error))
	.finally(() => console.log("Request finalizada"));

// const pokemonsAll = async () => {
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	return data;
// };

// const pokemonAll = pokemonsAll();
// pokemonAll
// 	.then((data) => {
// 		const pokemons = data.results;
// 		const list = document.getElementById("pokemons");

// 		for (const [index, pokemon] of pokemons.entries()) {
// 			const item = document.createElement("li");
// 			item.className = "pokemon grass";
// 			item.innerHTML = `
// 			<span class="number">#00${index + 1}</span>
// 			<span class="name">${pokemon.name}</span>
// 			<div class="detail">
// 				<ol class="types">
// 					<li class="type">grass</li>
// 					<li class="type">poison</li>
// 				</ol>
// 				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg" />
// 			</div>
// 		`;
// 			list.appendChild(item);
// 		}
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log("Request finalizada");
// 	});
