export const initialState = {
    basket: [],
    user: null
  };
  
  function reducer (state, action) {
    console.log(action);
    switch(action.type){
      case 'ADD_TO_BASKET':
        // Logic for adding itme to basket
        return {
          ...state,
        basket: [...state.basket, action.item],
        }
        break;
        case 'REMOVE_FROM_BASKET':
      // logic for removing item form basket
      return {state}
        break;
        default:
          return state
    }
  }
  export default reducer;  