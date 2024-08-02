import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  const trailer = useSelector((store) => store?.movie?.movieTrailer);
  useMovieTrailer(movieId);
 
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
