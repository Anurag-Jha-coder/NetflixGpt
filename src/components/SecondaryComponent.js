import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryComponent = () => {

  const movies = useSelector((store) => store.movie.nowPlayingMovies)
  const popularMovies = useSelector((store) => store.movie.popularMovies)
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies)
  const upcomingMovies = useSelector((store) => store.movie.upComingMovies)
  return (
    
    <div className='bg-black text-white m-0 p-0'>
    <MovieList title = {"Now Playing"} movies = {movies}/>
    <MovieList title = {"Top Rated"} movies = {topRatedMovies}/>
    <MovieList title = {"Popular"} movies = {popularMovies}/>
    <MovieList title = {"Upcoming"} movies = {upcomingMovies}/>
    </div>
    
  )
}

export default SecondaryComponent
