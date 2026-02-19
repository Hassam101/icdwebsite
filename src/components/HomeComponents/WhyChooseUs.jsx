// components/WhyChooseUs.jsx
import React from "react";
import "./WhyChooseUs.css";
import { FaPlay, FaQuoteRight, FaArrowRight } from "react-icons/fa";

const WhyChooseUs = () => {
  const videoId = "KOxTQl5YETc";
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`;

  const handleFindMoreClick = () => {
    // Add your navigation logic here
    // For example: window.location.href = "/about";
    console.log("Find out more clicked");
  };

  return (
    <div className="why-choose-wrapper">
      <div className="why-choose-container">
        {/* Left Column - Text Content */}
        <div className="why-choose-text-column">
          <div className="why-choose-text-content">
            <span className="why-choose-subtitle">Why Choose Us</span>
            <h2 className="why-choose-heading">
              Why Choose <span className="why-choose-heading-highlight">ICD?</span>
            </h2>
            <div className="why-choose-description">
              <p>
                Institute of Career Development has been working with adult learners, 
                who want to excel in their fields, since its birth in 2008. It is for 
                the fact that we provide quality education that we have been able to 
                obtain myriad affiliations with well reputed organizations. We are 
                working with individuals as well as time-honoured institutions and 
                organizations with similar objectives.
              </p>
            </div>
            
            {/* Find out more button */}
            <div className="why-choose-button-container">
              <button 
                className="why-choose-find-more-btn"
                onClick={handleFindMoreClick}
              >
                Find More About Us
                <FaArrowRight className="why-choose-btn-icon" />
              </button>
            </div>

            {/* Quote Icon */}
            <FaQuoteRight className="why-choose-quote-icon" />
          </div>
        </div>

        {/* Right Column - Video Content with Background Color */}
        <div className="why-choose-video-column">
          <div className="why-choose-video-background">
            <div className="why-choose-video-container">
              <iframe
                className="why-choose-video-iframe"
                src={videoSrc}
                title="Why Choose ICD Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;