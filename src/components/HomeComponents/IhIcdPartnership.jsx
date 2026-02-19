// components/IhIcdPartnership.jsx
import React, { useEffect } from "react";
import "./IhIcdPartnership.css";

// Import React Icons
import { 
  FaAward, 
  FaGlobe, 
  FaNetworkWired, 
  FaHandshake, 
  FaBriefcase, 
  FaTools, 
  FaCertificate 
} from "react-icons/fa";

// Import image from assets folder
import partnershipImage from "../../assets/partnership-image.jpg"; // Update this path to match your actual image filename

const IhIcdPartnership = () => {
  useEffect(() => {
    // Add some interactive elements (equivalent to the DOMContentLoaded script)
    const benefitItems = document.querySelectorAll(".ih-icd-benefit-item");

    benefitItems.forEach((item, index) => {
      // Add animation delay to each benefit item
      item.style.animationDelay = `${index * 0.1}s`;
    });
  }, []); // Empty dependency array means this runs once after component mounts

  const handleViewMoreClick = () => {
    window.open("https://ihworld.com/news-blog/ih-network-news/welcome-ih-lahore-islamabad-karachi/", "_blank");
  };

  return (
    <div className="ih-icd-partnership-container">
      <div className="ih-icd-partnership-card">
        <div className="ih-icd-text-section">
          <h1 className="ih-icd-main-heading">
            <span className="ih-icd-acronyms">IH</span> Announces Partnership with
            <span className="ih-icd-acronyms"> ICD</span>
          </h1>
          <p className="ih-icd-partnership-description">
            International House (IH) is proud to announce its strategic
            partnership with the Institute of Career Development (ICD). This
            collaboration brings together IH's global educational expertise with
            ICD's career-focused certification programs, creating unparalleled
            opportunities for students worldwide. This partnership represents a
            significant step forward in providing comprehensive education that
            combines language proficiency with career-ready skills. Students
            will benefit from a holistic approach to personal and professional
            development.
          </p>
          <h2 className="ih-icd-benefits-heading">
            <FaAward className="ih-icd-benefits-icon" />
            Benefits of IH Certification for Students
          </h2>
          <ul className="ih-icd-benefits-list">
            <li className="ih-icd-benefit-item">
              <div className="ih-icd-benefit-icon">
                <FaGlobe />
              </div>
              Globally recognized certification enhancing career prospects
            </li>
            <li className="ih-icd-benefit-item">
              <div className="ih-icd-benefit-icon">
                <FaNetworkWired />
              </div>
              Access to IH's international network of educational institutions
            </li>
            <li className="ih-icd-benefit-item">
              <div className="ih-icd-benefit-icon">
                <FaHandshake />
              </div>
              Combined expertise of language education and career development
            </li>
            <li className="ih-icd-benefit-item">
              <div className="ih-icd-benefit-icon">
                <FaBriefcase />
              </div>
              Pathways to international employment opportunities
            </li>
            <li className="ih-icd-benefit-item">
              <div className="ih-icd-benefit-icon">
                <FaTools />
              </div>
              Industry-relevant skills development programs
            </li>
            <li className="ih-icd-benefit-item">
              <div className="ih-icd-benefit-icon">
                <FaCertificate />
              </div>
              Enhanced credibility with dual certification
            </li>
          </ul>
          <p className="ih-icd-partnership-description">
            This partnership represents a significant step forward in providing
            comprehensive education that combines language proficiency with
            career-ready skills. Students will benefit from a holistic approach
            to personal and professional development.
          </p>
          <div className="ih-button-viewmore">
            <button onClick={handleViewMoreClick}>
              View More
            </button>
          </div>
        </div>

        <div className="ih-icd-image-section">
          <div className="ih-icd-image-decoration"></div>
          <div className="ih-icd-image-decoration-2"></div>
          <img
            src={partnershipImage}
            alt="Students in a collaborative learning environment"
            className="ih-icd-partnership-image"
          />
        </div>
      </div>
    </div>
  );
};

export default IhIcdPartnership;