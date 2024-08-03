import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMove";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();

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
