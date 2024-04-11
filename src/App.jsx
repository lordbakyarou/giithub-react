import React from "react";
import YouTubeShorts from "./YoutubeShort";
import "./App.css";

const App = () => {
  // Example array of YouTube video links
  const videos = [
    "www.youtube.com/embed/n4hxx-XRWGo",
    "https://www.youtube.com/shorts/4A__rZ4Ovik",
    "https://www.youtube.com/shorts/9L-YUhbm_yI",
    "https://www.youtube.com/shorts/VzOBpgY7YPU",
    "https://www.youtube.com/shorts/5vcN4YtUN0o",
    "https://www.youtube.com/shorts/sTY4C0zf3CE",
    "https://www.youtube.com/shorts/6L3U0THQtcI",
    // Add more video links as needed
  ];

  return (
    <div className="w-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-4">YouTube Shorts</h1>
      <YouTubeShorts videos={videos} />
    </div>
  );
};

export default App;
