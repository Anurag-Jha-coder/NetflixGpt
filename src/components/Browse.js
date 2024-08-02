import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/*

      MainConatainer
        - VideoTitle
        - VideoBackground

      SecondarayContainer
        - MovieList * n 
             - MovieCard * n
      
      */
      }

      <MainContainer/>
      <SecondaryComponent/>
    </div>
  );
};

export default Browse;
