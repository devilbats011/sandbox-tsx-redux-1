import React, { useEffect, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import "scss/Sandboxx.scss";
import { addPokemon } from "./../redux/pokemon/action";
import Table from "./Table";
import FS from "file-saver";
import XLSX from "xlsx";

function Sandboxx(): ReactElement {
  const pokemonsSelector = useSelector((state) => state) as any;
  const dispatch = useDispatch();

  const Magikarp = {
    name: "Magikarp",
    type: "water",
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
  };

  function handleJsonToExcel(): void {
    const temp1 = pokemonsSelector.poke;
    const worksheet = XLSX.utils.json_to_sheet(temp1);
    /* pokemon-data#1 both MUST have same name */
    const workbook = {
      Sheets: {
        "pokemon-data#1": worksheet,
      },
      SheetNames: ["pokemon-data#1"],
    };
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    console.log("excelBuffer:", excelBuffer);
    //excelBuffer need to be convert into blob to enable user to download+save
    const type1 =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const type2 = "application/vnd.ms-excel;charset=utf-8";

    const dataBlob = new Blob([excelBuffer], { type: type1 });
    FS.saveAs(dataBlob, "poke-dex-type-1-" + new Date().getTime() + ".xlsx");
  }

  function test(): any {
    const temp = [1, 2, 3];
    console.log(temp[3], temp[2]);
  }
  useEffect(() => {
    test();
  }, []);

  return (
    <div className="sandboxx">
      <h1>WELCOME TO SANDBOX-X </h1>
      <button
        onClick={() => dispatch(addPokemon(Magikarp))}
        className="sandbox-btn"
      >
        ADD MAGIKARP
      </button>
      <button
        onClick={() => {
          handleJsonToExcel();
        }}
        className="sandbox-btn"
      >
        EXPORT EXCEL
      </button>
      <br />
      <br></br>
      <Table />
      <br />
      <br />
    </div>
  );
}

export default Sandboxx;
