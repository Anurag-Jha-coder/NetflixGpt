import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {  
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
