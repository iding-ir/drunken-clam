import { combineReducers } from "redux";

import tabsReducer from "./tabs";
import dataReducer from "./data";

const combinedReducers = combineReducers({
  tabs: tabsReducer,
  data: dataReducer,
});

export default combinedReducers;
