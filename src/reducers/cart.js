import { OPEN_CART, CLOSE_CART } from "../constants";

const INITIAL_STATE = { visible: false, items: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...state, visible: true };
    case CLOSE_CART:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default reducer;
