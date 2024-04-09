import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ stream, email }) => {
  return (
    <div className="video-player-container">
      <h1>{email}</h1>
      <ReactPlayer
        playing
        muted
        height="100%"
        width="100%"
        url={stream}
      />
    </div>
  );
};

export default VideoPlayer;