import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if (!movies) return;
  const mainMovi = movies[0];
  console.log(mainMovi);

  const {original_title, overview, id} = mainMovi;

  return (
    <div>
      <VideoTitle title={original_title}  overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
