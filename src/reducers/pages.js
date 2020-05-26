import { ADD_PAGE } from "../constants";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PAGE:
      return { ...state, [action.payload]: (state[action.payload] || 0) + 1 };
    default:
      return state;
  }
};

export default reducer;
