import { CHANGE_TAB } from "../constants";

export const changeTab = (tab) => {
  return {
    type: CHANGE_TAB,
    payload: tab,
  };
};
