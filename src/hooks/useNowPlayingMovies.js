import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import Options from "../utils/Options";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      Options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getlayingMovies();
  }, []);
};

export default useNowPlayingMovies;