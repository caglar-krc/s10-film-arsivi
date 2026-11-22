import {
  DELETE_MOVIE,
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_MOVIE
} from "./actions";
import movies from "./../data";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
        favorites: state.favorites.filter((item) => action.payload !== item.id)
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((favori) => favori.id === action.payload.id).length > 0 ? state.favorites : [...state.favorites, action.payload]
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((favori) => favori.id !== action.payload)
      }
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites
      }
    default:
      return state;
  }
};

export default reducer;
