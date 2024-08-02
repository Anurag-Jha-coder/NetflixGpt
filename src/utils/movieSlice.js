import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  movieTrailer: null,
};

const addNowPlayingMovies = createAction("addNowPlayingMovies");
const addMovieTrailer = createAction("addMovieTrailer");

const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addNowPlayingMovies, (state, action) => {
      state.nowPlayingMovies = action.payload;
    })
    .addCase(addMovieTrailer, (state, action) => {
      state.movieTrailer = action.payload;
    });
});

export { addNowPlayingMovies, addMovieTrailer };
export default movieReducer;
