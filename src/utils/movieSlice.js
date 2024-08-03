import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  movieTrailer: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
};

const addNowPlayingMovies = createAction("addNowPlayingMovies");
const addMovieTrailer = createAction("addMovieTrailer");
const addPopularMovies = createAction("addPopularMovies");
const addTopRatedMovies = createAction("addTopRatedMovies");
const addUpcomingMoves = createAction("addUpcomingMovies");

const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addNowPlayingMovies, (state, action) => {
      state.nowPlayingMovies = action.payload;
    })
    .addCase(addMovieTrailer, (state, action) => {
      state.movieTrailer = action.payload;
    })
    .addCase(addPopularMovies, (state, action) => {
      state.popularMovies = action.payload;
    })
    .addCase(addTopRatedMovies, (state, action) => {
      state.topRatedMovies = action.payload;
    })
    .addCase(addUpcomingMoves, (state, action) =>{
       state.upComingMovies = action.payload
    })

});

export { addNowPlayingMovies, addMovieTrailer, addPopularMovies,addTopRatedMovies, addUpcomingMoves };
export default movieReducer;
