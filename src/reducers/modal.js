import { OPEN_MODAL, CLOSE_MODAL } from "../constants";

const INITIAL_STATE = true;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;

    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default reducer;
