import React from "react";
import VideoItem from "./VideoItem";

const SearchList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video, index) => (
    <VideoItem
      video={video}
      key={video.id.videoId + index}
      onVideoSelect={onVideoSelect}
    />
  ));
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default SearchList;
