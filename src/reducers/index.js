import { combineReducers } from "redux";

import tabsReducer from "./tab";
import dataReducer from "./data";

const combinedReducers = combineReducers({
  tab: tabsReducer,
  data: dataReducer,
});

export default combinedReducers;
