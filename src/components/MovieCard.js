import React from "react";
import {IMAGE_CDN_URL} from "./utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath)
  return (
    <div className='w-48 p-2'>
      <img alt="image card" src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
};

export default MovieCard;