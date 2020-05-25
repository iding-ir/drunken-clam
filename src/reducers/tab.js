import { CHANGE_TAB } from "../constants";

const INITIAL_STATE = 0;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
