import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: { addNowPlayingMovies: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularVideo = action.payload;
    },
    
    addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
      },
      addTopRatedMovies: (state, action) => {
        state.topRatedVideo = action.payload;
      },

  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
