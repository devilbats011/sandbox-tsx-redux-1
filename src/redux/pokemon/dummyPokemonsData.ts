const Lilligant = {
  name: "Lilligant",
  type: "Grass",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/549.png",
};
const Charizard = {
  name: "Charizard",
  type: "Fire|Flying",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
};
const Bulbasaur = {
  name: "Bulbasaur",
  type: "Grass|Poison",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
};
const Blastoise = {
  name: "Bulbasaur",
  type: "water",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
};
const Shellos = {
  name: "Shellos",
  type: "water",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/422.png",
};
const Kyurem = {
  name: "Kyurem",
  type: "dragon|ice",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/646.png",
};

export interface templatePokemon  {
  data:Array<any> ,
  total:number,
  pack:number,
  count:number

}

const pokemon_6:templatePokemon ={
 data: [Lilligant, Charizard, Bulbasaur, Blastoise, Shellos, Kyurem],
 total: 6,
 pack: 2,
 count: (6/2)
} 

let pokemon_100:templatePokemon = {
  data: [],
  total: 100,
  pack: 10,
  count: (100/10)
}

for (let index = 0; index < 100; index++) {
   let temp_i = 0;
   if(temp_i >= 5)
    temp_i = 0

    pokemon_100.data.push(pokemon_6.data[temp_i])
    
}

export {pokemon_100,pokemon_6}
