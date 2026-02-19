import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import collabLogo1 from "../../assets/collab-logo1.png";
import collabLogo2 from "../../assets/collab-logo2.png";
import collabLogo4 from "../../assets/collab-logo4.png";
import collabLogo5 from "../../assets/collab-logo5.png";
import collabLogo6 from "../../assets/collab-logo6.png";
import collabLogo7 from "../../assets/collab-logo7.png";
import companyLogo from "../../assets/logo.png";
import borderImage from "../../assets/footer-border.png";
import "./Footer.css";

const Footer = () => {
  const collaboratorLogos = [
    { id: 1, src: collabLogo1, alt: "Collaborator 1" },
    { id: 2, src: collabLogo2, alt: "Collaborator 2" },
    { id: 4, src: collabLogo4, alt: "Collaborator 4" },
    { id: 5, src: collabLogo5, alt: "Collaborator 5" },
    { id: 6, src: collabLogo6, alt: "Collaborator 6" },
    { id: 7, src: collabLogo7, alt: "Collaborator 7" },
  ];

  // Duplicate logos multiple times for seamless infinite scroll
  // Using 3 sets for smooth infinite loop (adjust based on number of logos)
  const duplicatedLogos = [
    ...collaboratorLogos,
    ...collaboratorLogos,
    ...collaboratorLogos,
  ];

  const quickLinks = [
    { name: "Student Portal", url: "https://portal.icd.org.pk/" },
    {
      name: "Login to Teaching Courses",
      url: "https://teachingcourses.net/login/index.php?loginredirect=1",
    },
    { name: "Online Store", url: "https://store.icd.org.pk/" },
    { name: "Contact Us", url: "/contact" },
    { name: "About Us", url: "/about" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/icdpakistan",
      color: "#1877f2",
    },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "#1da1f2" },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/icd-pakistan/",
      color: "#0a66c2",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/icdpakistan",
      color: "#e4405f",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/channel/UCPtKEvwqsvvXh_eKk2-wi3A",
      color: "#ff0000",
    },
  ];

  return (
    <footer className="footer">
      {/* Upper Border with Image */}
      <div className="footer-border">
        <img src={borderImage} alt="Footer Border" className="border-image" />
      </div>

      {/* Collaborators Carousel */}
      <div className="collaborators-section">
        <div className="logos-carousel">
          <div className="carousel-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item">
                <img src={logo.src} alt={logo.alt} className="collab-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content - 4 Columns */}
      <div className="footer-content">
        {/* Column 1 - Company Info */}
        <div className="footer-column">
          <div className="company-info">
            <img src={companyLogo} alt="Company Logo" className="footer-logo" />
            <p className="company-description">
              Institute of Career Development has been working with adult
              learners, who want to excel in their fields, since its birth in
              2008.
            </p>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-column">
          <h4 className="column-title">Quick Links</h4>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                {link.url.startsWith("/") ? (
                  <Link to={link.url} className="link-item">
                    <FaArrowRight className="link-icon" />
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.url} className="link-item" target="_blank" rel="noopener noreferrer">
                    <FaArrowRight className="link-icon" />
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Submit Enquiry */}
        <div className="footer-column">
          <h4 className="column-title">Submit Your Enquiry</h4>
          <div className="enquiry-section">
            <p className="enquiry-text">
              Have a question or want to work with us? Submit your enquiry
              through our portal.
            </p>
            <a
              href="https://portal.icd.org.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="enquiry-button"
            >
              <HiOutlineMail className="button-icon" />
              Submit Enquiry
              <BsGlobe className="button-icon" />
            </a>
          </div>
        </div>

        {/* Column 4 - Social Media Links */}
        <div className="footer-column">
          <h4 className="column-title">Connect With Us</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ "--social-color": social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="newsletter-text">
            <p>Follow us on social media for updates and news</p>
          </div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="copyright-row">
        <div className="copyright-content">
          <p>
            &copy; {new Date().getFullYear()} Institute of Career Development.
            All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
