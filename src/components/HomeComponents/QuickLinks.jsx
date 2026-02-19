import React from 'react';
import { HiLibrary, HiAcademicCap, HiHome, HiGlobe } from 'react-icons/hi';
import { MdSchool, MdStore, MdDiscount } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import './QuickLinks.css';

const QuickLinks = () => {
  const quickLinks = [
    {
      id: 1,
      title: 'Digital Library',
      icon: <HiLibrary />,
      link: '#',
      color: '#FF6B6B'
    },
    {
      id: 2,
      title: 'Online Learning Platform',
      icon: <HiAcademicCap />,
      link: '#',
      color: '#4ECDC4'
    },
    {
      id: 3,
      title: 'Accommodation',
      icon: <HiHome />,
      link: '#',
      color: '#FFD93D'
    },
    {
      id: 4,
      title: 'ICD Portal',
      icon: <HiGlobe />,
      link: '#',
      color: '#6C5CE7'
    },
    {
      id: 5,
      title: 'Recognition of ICD',
      icon: <FaAward />,
      link: '#',
      color: '#FF8C42'
    },
    {
      id: 6,
      title: 'Teaching Courses Portal',
      icon: <MdSchool />,
      link: '#',
      color: '#A8E6CF'
    },
    {
      id: 7,
      title: 'ICD Store',
      icon: <MdStore />,
      link: '#',
      color: '#FFB347'
    },
    {
      id: 8,
      title: 'ICD Discounts',
      icon: <MdDiscount />,
      link: '#',
      color: '#FF69B4'
    }
  ];
  return (
    <section className="quick-links-section">
      <div className="container">
        <h2 className="section-titles-quick-links">
          Quick Links
        </h2>
        
        <div className="quick-links-grid">
          {quickLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="quick-link-card"
              style={{ '--card-color': item.color }}
            >
              <div 
                className="icon-circle"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <div 
                  className="icon"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
              </div>
              <h3 className="link-title">{item.title}</h3>
              <div 
                className="card-shine"
                style={{ background: `linear-gradient(45deg, transparent, ${item.color}10, transparent)` }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;