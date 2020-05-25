import { combineReducers } from "redux";

import tabsReducer from "./tab";
import dataReducer from "./data";
import modalReducer from "./modal";

const combinedReducers = combineReducers({
  tab: tabsReducer,
  data: dataReducer,
  modal: modalReducer,
});

export default combinedReducers;
