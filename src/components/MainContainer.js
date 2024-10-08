import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[4];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  movieId = {id} />
    </div>
  );
};

export default MainContainer;
