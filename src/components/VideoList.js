import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = (props) => {
// use ES2015 to extract the required data
const VideoList = ({ videos, onVideoSelect }) => {
  // only return one JSX component <div> with a list of videoItem within
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId} // important
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
