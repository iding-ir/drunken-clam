import { ADD_PAGE } from "../constants";

export const addPage = (tab) => {
  return {
    type: ADD_PAGE,
    payload: tab,
  };
};
