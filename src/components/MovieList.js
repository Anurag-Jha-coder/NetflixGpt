import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="py-1 px-8">{title}</h1>
      <div className=" flex overflow-x-scroll mx-7">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              imageId={movie.backdrop_path}
              name={movie.original_tiltle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
