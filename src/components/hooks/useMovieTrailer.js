import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesReducer";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieData = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    const trailer = json.results.find((video) => video.type === 'trailer') || json?.results[0];
    dispatch(addTrailerVideo(trailer));
  }
  
  useEffect(() => {
    getMovieData();
  }, []);
}

export default useMovieTrailer;
