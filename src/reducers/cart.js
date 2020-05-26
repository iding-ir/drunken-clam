import _ from "lodash";

import {
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants";

const INITIAL_STATE = { visible: false, items: {} };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...state, visible: true };
    case CLOSE_CART:
      return { ...state, visible: false };
    case ADD_TO_CART: {
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
    }
    case REMOVE_FROM_CART: {
      const count = state.items[action.payload.id].count;

      if (count > 1) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: { item: action.payload, count: count - 1 },
          },
        };
      } else {
        return {
          ...state,
          items: _.omit(state.items, action.payload.id),
        };
      }
    }
    default:
      return state;
  }
};

export default reducer;
