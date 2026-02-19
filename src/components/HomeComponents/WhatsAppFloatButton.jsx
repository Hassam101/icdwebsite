import React, { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaGraduationCap, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineContactSupport } from 'react-icons/md';
import './WhatsAppFloatButton.css';

const WhatsAppFloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const whatsappContacts = [
    {
      id: 1,
      city: 'Lahore',
      type: 'Exam Preparation',
      description: 'Entrance Test & Exam Queries',
      icon: <FaGraduationCap />,
      color: '#4CAF50',
      url: 'https://api.whatsapp.com/send?phone=923171170216'
    },
    {
      id: 2,
      city: 'Lahore',
      type: 'Teaching Qualification',
      description: 'Teaching Certification & Training',
      icon: <FaChalkboardTeacher />,
      color: '#2196F3',
      url: 'https://api.whatsapp.com/send?phone=923164487781'
    },
    {
      id: 3,
      city: 'Islamabad',
      type: 'Student Support',
      description: 'General Queries & Guidance',
      icon: <FaUniversity />,
      color: '#9C27B0',
      url: 'https://api.whatsapp.com/send?phone=923163336083'
    },
    {
      id: 4,
      city: 'Karachi',
      type: 'Student Support',
      description: 'Admissions & General Queries',
      icon: <MdOutlineContactSupport />,
      color: '#FF5722',
      url: 'https://api.whatsapp.com/send?phone=923106222094'
    }
  ];

  const toggleWhatsappMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-float-wrapper">
      {/* Overlay for better UX */}
      {isOpen && (
        <div className="whatsapp-float-overlay" onClick={toggleWhatsappMenu} />
      )}

      {/* WhatsApp Menu Panel */}
      <div className={`whatsapp-float-panel ${isOpen ? 'whatsapp-float-panel-open' : ''}`}>
        <div className="whatsapp-float-header">
          <div className="whatsapp-float-header-icon">
            <FaWhatsapp />
          </div>
          <div className="whatsapp-float-header-text">
            <h3>Chat with Us</h3>
            <p>Select your city to connect</p>
          </div>
        </div>

        <div className="whatsapp-float-contacts">
          {whatsappContacts.map((contact, index) => (
            <a
              key={contact.id}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-float-contact-item"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div 
                className="whatsapp-float-contact-icon"
                style={{ backgroundColor: `${contact.color}15` }}
              >
                <span style={{ color: contact.color }}>{contact.icon}</span>
              </div>
              <div className="whatsapp-float-contact-details">
                <div className="whatsapp-float-contact-city">
                  <FaMapMarkerAlt className="whatsapp-float-contact-city-icon" />
                  <span>{contact.city}</span>
                </div>
                <h4 className="whatsapp-float-contact-type">{contact.type}</h4>
               
              </div>
              <div className="whatsapp-float-contact-arrow">
                <FaWhatsapp />
              </div>

              {/* Hover Effect Line */}
              <div 
                className="whatsapp-float-hover-line"
                style={{
                  transform: hoveredItem === index ? 'scaleX(1)' : 'scaleX(0)',
                  backgroundColor: contact.color
                }}
              />
            </a>
          ))}
        </div>

        <div className="whatsapp-float-footer">
          <p>Response time: Usually within minutes</p>
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <button
        className={`whatsapp-float-main-button ${isOpen ? 'whatsapp-float-main-button-active' : ''}`}
        onClick={toggleWhatsappMenu}
        aria-label="WhatsApp contact options"
      >
        {isOpen ? <IoMdClose /> : <FaWhatsapp />}
        
        {/* Ripple Effect */}
        <span className="whatsapp-float-ripple" />
      </button>

      {/* Tooltip when closed */}
      {!isOpen && (
        <div className="whatsapp-float-tooltip">
          <span>Chat with us on WhatsApp</span>
          <div className="whatsapp-float-tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloatButton;