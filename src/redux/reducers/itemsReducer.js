const initialState = {
    items: [],
  };
  
  export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  }
  