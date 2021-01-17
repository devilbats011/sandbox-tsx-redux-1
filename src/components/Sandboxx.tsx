import React, { useState, useEffect, ReactElement } from "react";
import {
  useSelector,
  useDispatch,
  //,TypedUseSelectorHook }
} from "react-redux";
import "scss/Sandboxx.scss";
import { addPokemon } from "redux/pokemon/action";
// import { createSelector } from 'reselect'

function Sandboxx(): ReactElement {
  //   const pokemonsSelector = (_state: any) => _state
  //   const getPokemons = createSelector(
  //     pokemonsSelector,
  //     (posts) => posts
  //   )
  //   const pokemons: TypedUseSelectorHook<any> = useSelector;

  const pokemonsSelector = useSelector((state) => state) as any;
  const [state,setState] = useState([]) as any
  const dispatch = useDispatch();

  useEffect(() => {
    setState(pokemonsSelector.poke)
    return () => {};
  }, [pokemonsSelector]);

  const aPokemon = {
    name: "Magikarp",
    type: "water",
    picture: null,
  };

  return (
    <div className="sandboxx">
      <h1>WELCOME TO SANDBOX-X</h1>
      <button onClick={() => dispatch(addPokemon(aPokemon))}>
        ADD MAGIKARP
      </button>
      <br/>
      { state.map((pokemon: any) => {
        return (<div><p>{ pokemon.name } </p><p> {pokemon.type} </p><br></br></div>)
      }) }
    </div>
  );
}

export default Sandboxx;
