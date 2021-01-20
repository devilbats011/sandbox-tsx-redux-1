import React, { useState, useEffect, ReactElement } from "react";
import { useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { pokemon_6 } from "redux/pokemon/dummyPokemonsData";

function Table(): ReactElement {
  let key = 0;
  const pokemonsSelector = useSelector((state) => state) as any;
  const [state, setState] = useState([]) as any;
  const [table, setTable] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [offsetx, setOffsetx] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function handlePaginationTable(pack: number): void {
    key = 0;
    let xpage = page - 1;
    let offset = xpage * pack; // (1-1)*2 = 0
    let limit = offset + pack; // 0+2 = 2
    let arrayTemp = [];
    let pokeData = state as Array<any>;
    //start with offset is 2 end at limit
    for (let index = offset; index < limit; index++) {
      //check kalau undefined, dia pelik sikit dia bagi data array undefined pada mula nya...maybe because of useEffect  yg telah ada...
      if (pokeData[index] !== undefined) arrayTemp.push(pokeData[index]);
    }

    setOffsetx(offset);
    if (arrayTemp.length > 0) setTable(arrayTemp);
  }

  function handlePaginationCount(): number {
    const tempArray = state as Array<any>;
    let count = tempArray.length / 2;
    count = Math.ceil(count);
    return count as number;
  }

  function handleKey(key: number): number {
    let sum = key + offsetx;
    return sum;
  }

  const Atable = () => {
    let xtable = table;
    return xtable.map((pokemon: any) => {
      key++;
      return (
        <tr key={handleKey(key)}>
          <td className="table-item">{handleKey(key)}</td>
          <td className="table-item">
            <img src={pokemon.picture} alt={pokemon.picture} />
          </td>
          <td className="table-item"> {pokemon.name} </td>
          <td className="table-item">{pokemon.type}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    setState(pokemonsSelector.poke);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonsSelector]);

  useEffect(() => {
    handlePaginationTable(pokemon_6.pack);
    handlePaginationCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, page]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th> No </th> <th> Picture </th> <th> Name </th> <th> Type </th>
        </tr>
      </thead>
      <tbody>
        {table.length !== 0 && Atable()}
        <tr>
          <td colSpan={4}>
            <Pagination
              count={handlePaginationCount()}
              variant="outlined"
              color="primary"
              className="MuiExtra"
              onChange={handleChange as any}
              page={page}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
