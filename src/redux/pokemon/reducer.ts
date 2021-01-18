import {pokemon_6,pokemon_100 } from "./dummyPokemonsData";

let initialState1: Array<any|[]> = pokemon_6.data;
let initialState2: Array<any|[]> = pokemon_100.data;

//_state
//_action
export default function reducer( state = initialState1, action: any): any {
  switch (action.type) {
      case "ADD":
         const _state =  [...state,action.payload]
          return _state;
      default:
          return state;
  }

}
