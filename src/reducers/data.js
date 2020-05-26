import { FETCH_DATA } from "../constants";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        [action.payload.tab]: [
          ...(state[action.payload.tab] || []),
          ...action.payload.data,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
