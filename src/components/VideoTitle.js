import React from "react";

const VideoTitleContainer = (props) => {
  const { title, overview } = props;

  return <div className="pt-36 px-12">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div>
      <button className="bg-gray-500 text-while p-4 px-16 text-xl bg-opacity-50 rounded-lg">Play</button>
      <button className="bg-gray-500 text-while p-4 px-16 text-xl bg-opacity-50 rounded-lg mx-2">More Info</button>
    </div>
  </div>
};

export default VideoTitleContainer;