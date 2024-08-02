import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
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
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; aut   oplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
