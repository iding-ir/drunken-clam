import { OPEN_CART, CLOSE_CART, ADD_TO_CART } from "../constants";

const INITIAL_STATE = { visible: false, items: {} };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...state, visible: true };
    case CLOSE_CART:
      return { ...state, visible: false };
    case ADD_TO_CART:
      const count =
        state.items[action.payload.id] === undefined
          ? 0
          : state.items[action.payload.id].count;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: { item: action.payload, count: count + 1 },
        },
      };
    default:
      return state;
  }
};

export default reducer;
