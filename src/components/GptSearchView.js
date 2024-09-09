import React from "react";
import { BG_IMAGE_URL } from "./utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchView = (props) => {
  
  return (
    <>
      <div className='fixed -z-10'>
        <img
          className="h-screen object-cover"
          alt="background_img"
          src={BG_IMAGE_URL}
        />
      </div>
      <div>
        <GptSearchBar />
      </div>
    </>
  )
};

export default GptSearchView;