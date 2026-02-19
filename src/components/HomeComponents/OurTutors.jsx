import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import "./OurTutors.css";

// Import tutor images (adjust paths according to your assets folder structure)
import saimaImage from "../../assets/tutors/saima-nazir.jpg"; // Update path
import svitlanaImage from "../../assets/tutors/svitlana-bulkina.jpg"; // Update path
import sabahatImage from "../../assets/tutors/sabahat-farooq.jpg"; // Update path
import rameeshaImage from "../../assets/tutors/rameesha-haris.jpg"; // Update path

const OurTutors = () => {
  const tutors = [
    {
      id: 1,
      name: "Aima Nazir",
      designation: "Educational Leader, Master Trainer, Public Speaker",
      image: saimaImage,
      linkedin: "https://www.linkedin.com/in/saima-nazir-8a5552b6/", // Update with actual URL
      bgColor: "#FF6B6B",
    },
    {
      id: 2,
      name: "Svitlana Bulkina",
      designation: "Instructor",
      image: svitlanaImage,
      linkedin: "https://www.linkedin.com/in/svitlana-bulkina-08a89416/", // Update with actual URL
      bgColor: "#4ECDC4",
    },
    {
      id: 3,
      name: "Sabahat Farooq",
      designation: "Instructor",
      image: sabahatImage,
      linkedin:
        "https://www.linkedin.com/in/sabahat-farooq-%F0%9F%87%B5%F0%9F%87%B8-440a6a1aa/", // Update with actual URL
      bgColor: "#FFD93D",
    },
    {
      id: 4,
      name: "Rameesha Haris",
      designation: "PhD Scholar (QAU), Senior Lecturer (UCP), TESOL Trainer",
      image: rameeshaImage,
      linkedin: "https://www.linkedin.com/in/rameesha-haris-22812b6b/", // Update with actual URL
      bgColor: "#6C5CE7",
    },
  ];

  const handleViewAllTutors = () => {
    // Add navigation logic here
    console.log("View all tutors clicked");
    // window.location.href = '/tutors'; or use router navigation
  };

  return (
    <section className="tutors-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-titles-our-tutors">Our Expert Tutors</h2>
          <p className="section-subtitle">
            Learn from industry experts and experienced educators
          </p>
        </div>

        <div className="tutors-grid">
          {tutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="tutor-card"
              style={{ "--card-accent": tutor.bgColor }}
            >
              <div className="tutor-image-wrapper">
                <div className="tutor-image-container">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="tutor-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/300x400?text=Tutor"; // Fallback image
                    }}
                  />
                </div>
                <div className="tutor-social">
                  <a
                    href={tutor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-btn"
                    aria-label={`${tutor.name}'s LinkedIn profile`}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div className="tutor-info">
                <h3 className="tutor-name">{tutor.name}</h3>
                <p className="tutor-designation">{tutor.designation}</p>
              </div>

              <div className="tutor-card-footer">
                <span className="experience-badge">Expert Tutor</span>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button onClick={handleViewAllTutors} className="view-all-btn">
            View All Tutors
            <svg
              className="btn-arrow"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTutors;
