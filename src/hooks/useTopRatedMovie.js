import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {

    const dispatch = useDispatch();

    const TopRated = async () =>{

        const data = await fetch(TOP_RATED, API_OPTIONS)

        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }

    useEffect( () =>{
        TopRated();
    }, [])
};



export default useTopRatedMovie;