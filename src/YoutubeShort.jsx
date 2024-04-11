import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./YoutubeShort.css"; // Import CSS file for styling

const YouTubeShorts = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || window.pageYOffset;

      // Check if the user has scrolled to the bottom of the page
      if (scrollTop + windowHeight >= document.body.scrollHeight) {
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(nextIndex);
      }

      // Check if the user has scrolled to the top of the page
      if (scrollTop === 0 && event.deltaY < 0) {
        const prevIndex =
          (currentVideoIndex - 1 + videos.length) % videos.length;
        setCurrentVideoIndex(prevIndex);
      }

      // Prevent default scroll behavior
      event.preventDefault();
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentVideoIndex, videos]);

  return (
    <div className="youtube-shorts-container  flex items-center">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`youtube-short ${
            index === currentVideoIndex ? "active" : ""
          }`}
        >
          <ReactPlayer
            url={video}
            width="50%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      ))}
    </div>
  );
};

export default YouTubeShorts;
