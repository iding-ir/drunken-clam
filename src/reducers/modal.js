import { OPEN_MODAL, CLOSE_MODAL, SELECT_BEER } from "../constants";

const INITIAL_STATE = { visible: false, item: {} };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, visible: true };
    case CLOSE_MODAL:
      return { ...state, visible: false };
    case SELECT_BEER:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};

export default reducer;
