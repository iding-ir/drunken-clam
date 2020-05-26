import { FETCH_DATA } from "../constants";
import data from "../apis/data";

export const fetchData = (tab, page, query) => async (dispatch) => {
  const response = await data.get(`?page=${page}&per_page=25&${query}`);

  dispatch({ type: FETCH_DATA, payload: { data: response.data, tab } });
};
