import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMove";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";


const Browse = () => {

  const searchPage = useSelector((store) => store.gpt.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      <Header />
    
      {searchPage ? <GptSearchPage/>:(
        <>
        <MainContainer/>
        <SecondaryComponent/>
        </>
      )}

      
    </div>
  );
};

export default Browse;
