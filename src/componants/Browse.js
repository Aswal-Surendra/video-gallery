import Header from "./Header";
import Footer from "./Footer";
import HeroPanelWizard from "./HeroPanelWizard.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";

const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <div>
        {" "}
        <HeroPanelWizard />
        <MainContainer/>
        <SecondaryContainer/>
         <Footer />
      </div>
    </div>
  );
};
export default Browse;
