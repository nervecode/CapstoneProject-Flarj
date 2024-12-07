import React, { useState } from "react";
import "../components/styles/HomePage.css";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/videos/video 1.mp4";
import video2 from "../assets/videos/video 2.mp4";
import video3 from "../assets/videos/video 3.mp4";
import video4 from "../assets/videos/video 4.mp4";
import video6 from "../assets/videos/video 6.mp4";
import video7 from "../assets/videos/video 7.mp4";

const videos = [
  { id: 1, title: " ", url: video1 },
  { id: 2, title: " ", url: video2 },
  { id: 3, title: " ", url: video3 },
  { id: 4, title: " ", url: video4 },
  { id: 6, title: " ", url: video6 },
  { id: 7, title: " ", url: video7 },
];

const HomePage = () => {
  const NavAbc = useNavigate();
  const NavNum = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
      <div className="video__gallery">
        <div className="floating-buttons">
      <button className="float-btn" onClick={() => NavAbc("/ABC")} >ABC</button>
      <button className="float-btn" onClick={() => NavNum("/Numbers")} >123</button>
    </div>
      {/* Video Player */}
      <div className="video__player">
        <video autoPlay muted loop controls src={selectedVideo.url} />
        <h3>{selectedVideo.title}</h3>
      </div>

      {/* Video Thumbnails */}
      <div className="video__thumbnails">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`thumbnail ${
              selectedVideo.id === video.id ? "active" : ""
            }`}
            onClick={() => setSelectedVideo(video)}
          >
            <video
              src={video.url}
              muted
              autoPlay
              loop
              className="thumbnail-video"
            />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
