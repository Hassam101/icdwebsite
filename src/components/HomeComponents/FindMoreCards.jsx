// components/FindMoreCards.jsx
import React from "react";
import "./FindMoreCards.css";

// Import images from assets folder
// Make sure these images exist in your src/assets/ folder
import card1Image from "../../assets/card1-image.jpg";
import card2Image from "../../assets/card2-image.jpg";
import card3Image from "../../assets/card3-image.jpg";

const FindMoreCards = () => {
  // First card data - Split into two columns
  const firstCardLinks = [
    // Column 1 links
    { text: "Why ICD?", url: "/why-icd" },
    { text: "Study Abroad services", url: "/study-abroad" },
    { text: "Preparation Material", url: "/preparation-material" },
    // Column 2 links
    { text: "ICD Tutors", url: "/icd-tutors" },
    { text: "Accommodation", url: "/accommodation" },
    { text: "Careers", url: "/careers" }
  ];

  // Split links into two columns
  const column1Links = firstCardLinks.slice(0, 3);
  const column2Links = firstCardLinks.slice(3, 6);

  return (
    <div className="find-more-cards-wrapper">
      <div className="find-more-cards-container">
        {/* Card 1 - Find More Card with Links */}
        <div className="find-more-card">
          <div className="find-more-card-header">
            <img 
              src={card1Image} 
              alt="Students studying" 
              className="find-more-card-image"
            />
          </div>
          <div className="find-more-card-content">
            <h3 className="find-more-card-title">Find out more</h3>
            <div className="find-more-links-grid">
              {/* Column 1 */}
              <div className="find-more-links-column">
                {column1Links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="find-more-card-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              {/* Column 2 */}
              <div className="find-more-links-column">
                {column2Links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="find-more-card-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Exam Preparation */}
        <div className="find-more-card">
          <div className="find-more-card-header">
            <img 
              src={card2Image} 
              alt="Exam preparation" 
              className="find-more-card-image"
            />
          </div>
          <div className="find-more-card-content">
            <h3 className="find-more-card-title">Exam Preparation</h3>
            <p className="find-more-card-description">
              Comprehensive preparation courses for international exams including IELTS, TOEFL, and Cambridge certifications.
            </p>
            <button className="find-more-card-button">View Courses</button>
          </div>
        </div>

        {/* Card 3 - Teaching Qualification */}
        <div className="find-more-card">
          <div className="find-more-card-header">
            <img 
              src={card3Image} 
              alt="Teaching qualification" 
              className="find-more-card-image"
            />
          </div>
          <div className="find-more-card-content">
            <h3 className="find-more-card-title">Teaching Qualification</h3>
            <p className="find-more-card-description">
              Professional teaching certificates and diplomas including CELTA, DELTA, and TEFL qualifications.
            </p>
            <button className="find-more-card-button">View Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMoreCards;