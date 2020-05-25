import { FETCH_DATA } from "../constants";
import data from "../apis/data";

export const fetchData = (query) => async (dispatch) => {
  const response = await data.get(query);

  dispatch({ type: FETCH_DATA, payload: response.data });
};
