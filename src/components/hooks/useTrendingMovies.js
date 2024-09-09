import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesReducer";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {

  const dispatch = useDispatch();

  const getNowTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getNowTrendingMovies();
  }, []);

};

export default useTrendingMovies;