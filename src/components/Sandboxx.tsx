import React, { useState, useEffect, ReactElement } from "react";
import {
  useSelector,
  useDispatch,
  //,TypedUseSelectorHook }
} from "react-redux";
import "scss/Sandboxx.scss";
import { addPokemon } from "redux/pokemon/action";
import Pagination from "@material-ui/lab/Pagination";
import { pokemon_6 } from "redux/pokemon/dummyPokemonsData";

function Sandboxx(): ReactElement {
  //   const pokemonsSelector = (_state: any) => _state
  //   const getPokemons = createSelector(
  //     pokemonsSelector,
  //     (posts) => posts
  //   )
  //   const pokemons: TypedUseSelectorHook<any> = useSelector;

  const pokemonsSelector = useSelector((state) => state) as any;
  const [state, setState] = useState([]) as any;
  const dispatch = useDispatch();
  let key = 0;
  useEffect(() => {
    setState(pokemonsSelector.poke);
    return () => {};
  }, [pokemonsSelector]);

  const Magikarp = {
    name: "Magikarp",
    type: ["water"],
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
  };

  const [page, setPage] = React.useState(1);
  const handleChange = (event:React.ChangeEvent<unknown> , value:number) => {
    setPage(value);
  };


  return (
    <div className="sandboxx">
      <h1>WELCOME TO SANDBOX-X </h1>
      <button onClick={() => dispatch(addPokemon(Magikarp))} className="sandbox-btn">
        ADD MAGIKARP
      </button>
      <br />
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Type </th>
          </tr>
        </thead>
        <tbody>
          {state.map((pokemon: any) => {
            key++;
            return (
              <tr key={key}>
                <td className="table-item">
                  <img src={pokemon.picture} alt={pokemon.picture} />{" "}
                </td>
                <td className="table-item"> {pokemon.name} </td>
                <td className="table-item">
                  {pokemon.type.map((t: string) => t + " ")}
                </td>
              </tr>
            );
          })}

          <tr>
            <td colSpan={3} >
              <Pagination count={pokemon_6.count} variant="outlined" color="primary" className="MuiExtra"  onChange={handleChange as any } page={page} />    
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h1>Current Page: {page as number} </h1>

    </div>
  );
}

export default Sandboxx;
