import React from 'react'
import { IMG_CDN } from '../utils/constants'
const MovieCard = ({imageId, movieId, name}) => {
  return (
    <div className='w-48 p-1 '>
      <img className = "rounded-lg"src={IMG_CDN+imageId} alt="{name}" />
    </div>
  )
}

export default MovieCard
