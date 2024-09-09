import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitleContainer from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if(!movies) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return <div>
    <VideoTitleContainer title={original_title} overview={overview} />
    <VideoBackground movieId={id} />
  </div>
};

export default MainContainer;
