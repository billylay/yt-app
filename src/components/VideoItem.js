import "./VideoItem.css";
import React from "react";

// const VideoItem = (props) => {
// use ES2015 to destructure out the required data so that we need not props.video
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // To add own styling add in a style video-item
    // Then in css define the style and children style
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      {/* oncClick={()=> used to pass parameters in callback} */}
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.channelTitle}</div>
        <div className="description">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
