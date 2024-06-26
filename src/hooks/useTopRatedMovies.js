import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/moviesSlice";
import Options from "../utils/Options";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      Options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;