import { FETCH_MOVIE_DATA_PENDING } from "./../types";
import { FETCH_MOVIE_DATA_COMPLETE } from "./../types";
import { FETCH_MOVIE_DATA_FAILED } from "./../types";

export const initialMovieState = {
  movieInfo: {},
  isFetching: false,
  isError: false
};

export default function(state = initialMovieState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DATA_PENDING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        isError: action.payload.isError
      };
    case FETCH_MOVIE_DATA_COMPLETE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        movieInfo: action.payload.res,
        isError: action.payload.isError
      };
    case FETCH_MOVIE_DATA_FAILED:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        isError: action.payload.isError
      };
    default:
      return state;
  }
}
