import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    
    const popularMovies = async () =>{

        const data = await fetch(POPULAR_MOVIES, API_OPTIONS)

        const json = await data.json();

        dispatch(addPopularMovies(json.results));


    }

    useEffect( () =>{
        popularMovies();
    }, [])
}

export default usePopularMovies;