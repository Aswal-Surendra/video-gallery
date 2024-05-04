import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return ( movies.addNowPlayingMovies && (
    <div className="-mt-52 relative z-2 bg-black">
      <MovieList title={"Now Playing"} movies= {movies.addNowPlayingMovies}/>
      <MovieList title={"Popular"} movies= {movies.popularVideo}/>
      <MovieList title={"Top Rated"} movies= {movies.topRatedVideo}/>
    </div>)
  );
};

export default SecondaryContainer;
