enum _type {
    normal,
    fire,
    figthing,
    water,
    flying,
    grass,
    poison,
    electric,
    ground,
  }
  
  type __type = | "psychic" | "rock" | "ice"
                | "bug" | "dragon" | "ghost" | "dark"
                | "steel" | "fairy" | "???"
  
  interface pokemon {
    name: string;
    type1: _type;
    type2: __type;
    picture: File | HTMLImageElement | string | null | undefined;
  }
  
  const type2: __type = "???";
 
 export let _pokemon = {
    name: "",
    type1: _type.normal,
    type2: type2,
    picture: undefined,
  };
