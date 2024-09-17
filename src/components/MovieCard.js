import React from "react";
import {IMAGE_CDN_URL} from "./utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath)
  return (
    <div className='w-36 md:w-48 p-2'>
      <img alt="movie cover" src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
};

export default MovieCard;