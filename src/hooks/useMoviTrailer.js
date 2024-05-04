import { useEffect } from "react";
import Options from "../utils/Options";
import { addTrailerVideo } from "../utils/moviesSlice";
import {useDispatch} from "react-redux";

const useMoviTrailer = (movieId) =>
{

    const dispatch = useDispatch();
  
    const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      Options
    );

    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))    
    console.log(trailer);
  };

  useEffect(() => {
    getMoviesVideos();
  });


}

export default useMoviTrailer;