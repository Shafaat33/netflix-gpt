import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useTrendingMovies from "./hooks/useTrendingMovies";
import GptSearchView from "./GptSearchView";

const Browse = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  
  return (
    <div>
      <Header />
      {
        showGptSearchView ? <GptSearchView /> : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse;
