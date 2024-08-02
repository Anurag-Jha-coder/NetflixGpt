import React from 'react'

const VideoTitle = ({title, overview}) => {
   
  return (

    <div className=' w-screen aspect-video absolute bg-gradient-to-r from-black'>
    <div className='absolute bottom-36 text-white  left-0 m-4 md:m-8 lg:m-12 z-40'>
      <h1 className='text-4xl font-bold m-2'>{title}</h1>
      <p className='text-lg w-1/3 m-2'>{overview}</p>

      <div>
        <button className= 'hover:opacity-80 rounded-lg m -2 p-3 px-12 bg-white text-black '>Play</button>
        <button className= 'hover:opacity-50 opacity-80 rounded-lg m-2 p-3 px-12 bg-gray-500 text-white'>More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
