export const initialState = {
    basket: [],
    user: null,
  };
  
  function reducer (state, action){
    switch(action.type){
      case 'ADD_TO_BASKET':
        // Logic for adding itme to basket
        break;
        case 'REMOVE_FROM_BASKET':
      // logic for removing item form basket
        break;
        default:
          return state
    }
  }
  export default reducer;  