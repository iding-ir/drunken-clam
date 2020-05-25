import { OPEN_MODAL, CLOSE_MODAL, SELECT_BEER } from "../constants";

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const selectBeer = (beer) => {
  return {
    type: SELECT_BEER,
    payload: beer,
  };
};
