import axios from "axios";
import { FETCH_MOVIE_DATA_PENDING } from "./../types";
import { FETCH_MOVIE_DATA_COMPLETE } from "./../types";
import { FETCH_MOVIE_DATA_FAILED } from "./../types";

export const getMovieInfo = endpoint => async dispatch => {
  debugger;
  dispatch({
    type: FETCH_MOVIE_DATA_PENDING,
    payload: {
      isFetching: true,
      isError: false
    }
  });
  try {
    const res = await axios.get(endpoint).then(response => response.data);
    debugger;
    dispatch({
      type: FETCH_MOVIE_DATA_COMPLETE,
      payload: {
        res: res,
        isFetching: false,
        isError: false
      }
    });
  } catch (e) {
    console.log(`Axios request failed: ${e}`);
    dispatch({
      type: FETCH_MOVIE_DATA_FAILED,
      payload: {
        isFetching: false,
        isError: true
      }
    });
  }
};
