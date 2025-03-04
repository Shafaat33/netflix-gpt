import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  console.log(movies?.nowPlayingMovies);
  
  return movies?.nowPlayingMovies && <div className='bg-black'>
    <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      <MoviesList movies={movies.nowPlayingMovies} title='Now Playing'/>
      <MoviesList movies={movies.popularMovies} title='Popular'/>
      <MoviesList movies={movies.trendingMovies} title='Trending'/>
    </div>
  </div>
};

export default SecondaryContainer;
