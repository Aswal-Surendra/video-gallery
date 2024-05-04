import Header from "./Header";
import HeroPanelWizard from "./HeroPanelWizard.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
  
  useNowPlayingMovies();

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

      </div>
    </div>
  );
};
export default Browse;
