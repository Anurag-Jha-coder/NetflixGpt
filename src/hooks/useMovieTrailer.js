import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const trailer = useSelector((store) => store?.movie?.movieTrailer);
    console.log(trailer);
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
        API_OPTIONS
      );
  
      const json = await data.json();
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
  
      if (filterData.length === 0) return;
  
      const trailer = filterData[0];
      dispatch(addMovieTrailer(trailer));
    };
  
    useEffect(() => {
      getMovieTrailer();
    }, []);
}

export default useMovieTrailer;