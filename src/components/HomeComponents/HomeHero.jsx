// components/HomeHero.jsx
import React from "react";
import "./HomeHero.css";

const HomeHero = () => {
  const videoId = "z7ID4114B8I";
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`;

  return (
    <div className="home-hero-wrapper">
      <div className="home-hero-video-container">
        <iframe
          className="home-hero-video-iframe"
          src={videoSrc}
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="home-hero-gradient-overlay"></div>
      <div className="home-hero-content">
        <h1 className="home-hero-title">
          Institute of{" "}
          <span className="home-hero-title-highlight">Career Development</span>
        </h1>
        <p className="home-hero-subtitle">
          Get Access to high quality learning wherever you are, with online
          courses, programs and degrees created by leading universities.
        </p>
        <div className="home-hero-buttons">
          <button className="home-hero-button-primary" style={{color: "#fff"}}>Enroll Now</button>
          <button className="home-hero-button-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
