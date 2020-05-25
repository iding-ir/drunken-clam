import { combineReducers } from "redux";

import tabsReducer from "./tabs";

const combinedReducers = combineReducers({
  tabs: tabsReducer,
});

export default combinedReducers;
