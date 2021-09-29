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
        url="https://ac8adf168f69.us-west-2.playback.live-video.net/api/video/v1/us-west-2.473199066310.channel.H4sy5NggSpIp.m3u8"
        playing={true}
        controls={true}
      />
    </div>
  );
}

export default App;
