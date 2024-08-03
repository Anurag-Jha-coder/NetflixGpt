import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants"
import { addUpcomingMoves } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovie = () =>{

    const dispatch = useDispatch();
    
    const upcomingMovie = async () =>{

        const data = await fetch(UPCOMING_MOVIES, API_OPTIONS)

        const json = await data.json();

        dispatch(addUpcomingMoves(json.results));

    }

    useEffect  (() =>{
        upcomingMovie();
    }, [])  
}

export default useUpcomingMovie;