import React from "react";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <ReactPlayer
        width="50%"
        height="50%"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        url="https://f466cb2b5e57.us-east-1.playback.live-video.net/api/video/v1/us-east-1.078835946993.channel.YtqZUVkQ9Wz5.m3u8"
        playing={true}
        controls={true}
      />
    </div>
  );
}

export default App;
