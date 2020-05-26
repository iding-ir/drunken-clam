import { combineReducers } from "redux";

import tabsReducer from "./tab";
import dataReducer from "./data";
import modalReducer from "./modal";
import cartReducer from "./cart";

const combinedReducers = combineReducers({
  tab: tabsReducer,
  data: dataReducer,
  modal: modalReducer,
  cart: cartReducer,
});

export default combinedReducers;
