
let initialState: Array<any|[]> = [];

//_state
//_action
export default function reducer( state = initialState, action: any): any {
  switch (action.type) {
      case "ADD":
         const _state =  [...state,action.payload]
          return _state;
      default:
          return state;
  }

}
