import React, { useEffect } from "react";
import { API_OPTIONS } from "./utils/constants";

const VideoBackground = (props) => {

  const getMovieData = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${97342}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return <div>
    <p>Video Container</p>
  </div>
};

export default VideoBackground;
