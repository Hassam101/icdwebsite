import React, { useState } from 'react';
import { FaPlay, FaYoutube, FaQuoteRight, FaUserGraduate } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoTestimonials = [
    {
      id: 1,
      studentName: 'Ayesha Khan',
      course: 'TESOL Certification',
      thumbnail: 'https://img.youtube.com/vi/NtuWZJ0PxEw/maxresdefault.jpg',
      videoId: 'NtuWZJ0PxEw',
      videoUrl: 'https://www.youtube.com/shorts/NtuWZJ0PxEw',
      duration: '0:45',
      comment: 'The TESOL course completely transformed my teaching career. The practical approach and expert guidance made all the difference!',
      rating: 5,
      verified: true,
      date: '2 weeks ago'
    },
    {
      id: 2,
      studentName: 'Bilal Ahmed',
      course: 'Educational Leadership',
      thumbnail: 'https://img.youtube.com/vi/G8x-ckRZQlE/maxresdefault.jpg',
      videoId: 'G8x-ckRZQlE',
      videoUrl: 'https://www.youtube.com/shorts/G8x-ckRZQlE',
      duration: '0:52',
      comment: 'Outstanding faculty and comprehensive curriculum. The leadership skills I gained here helped me become a better educator.',
      rating: 5,
      verified: true,
      date: '1 month ago'
    },
    {
      id: 3,
      studentName: 'Fatima Riaz',
      course: 'ICD Recognition Program',
      thumbnail: 'https://img.youtube.com/vi/UGEWI9gj1QI/maxresdefault.jpg',
      videoId: 'UGEWI9gj1QI',
      videoUrl: 'https://www.youtube.com/shorts/UGEWI9gj1QI',
      duration: '0:38',
      comment: 'The ICD recognition program opened so many doors for me internationally. Highly recommended for teachers!',
      rating: 5,
      verified: true,
      date: '3 weeks ago'
    },
    {
        id: 4,
        studentName: 'Omar Farooq',
        course: 'Master Trainer Program',
        thumbnail: 'https://img.youtube.com/vi/s_DnTPiIEeo/hqdefault.jpg',
        videoId: 's_DnTPiIEeo',
        videoUrl: 'https://www.youtube.com/shorts/s_DnTPiIEeo',
        duration: '0:55',
        comment: 'From a classroom teacher to a master trainer - this journey was amazing. The support and training were exceptional!',
        rating: 5,
        verified: true,
        date: '2 months ago'
      }
      
      
  ];

  const openVideoModal = (video) => {
    setActiveVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setActiveVideo(null);
    document.body.style.overflow = 'unset';
  };

  // Get YouTube embed URL with autoplay and shorts optimization
  const getEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <section className="testimonial-video-section">
      <div className="testimonial-video-container">
        {/* Section Header */}
        <div className="testimonial-video-header">
          
          
          <h2 className="testimonial-video-title">
            What Our Students Say
           
          </h2>
          
          <p className="testimonial-video-subtitle">
            Watch real stories from our successful students and see how we've helped transform their careers
          </p>
        </div>

        {/* Video Grid */}
        <div className="testimonial-video-grid">
          {videoTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-video-card"
              onClick={() => openVideoModal(testimonial)}
            >
              <div className="testimonial-video-thumbnail-wrapper">
                <img 
                  src={testimonial.thumbnail} 
                  alt={testimonial.studentName}
                  className="testimonial-video-thumbnail"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x225?text=Video+Thumbnail';
                  }}
                />
                <div className="testimonial-video-overlay">
                  <div className="testimonial-video-play-btn">
                    <FaPlay className="testimonial-video-play-icon" />
                  </div>
                  <span className="testimonial-video-duration">{testimonial.duration}</span>
                </div>
                <div className="testimonial-video-type-badge">
                  <FaYoutube className="testimonial-video-type-icon" />
                  <span>Short</span>
                </div>
              </div>

              <div className="testimonial-video-content">
                <div className="testimonial-video-student-info">
                  <div className="testimonial-video-avatar">
                    <FaUserGraduate className="testimonial-video-avatar-icon" />
                  </div>
                  <div className="testimonial-video-student-details">
                    <h3 className="testimonial-video-student-name">
                      {testimonial.studentName}
                      {testimonial.verified && (
                        <MdVerified className="testimonial-video-verified-badge" />
                      )}
                    </h3>
                    <p className="testimonial-video-course-name">{testimonial.course}</p>
                  </div>
                </div>

                <p className="testimonial-video-comment">
                  "{testimonial.comment}"
                </p>

                <div className="testimonial-video-footer">
                  <div className="testimonial-video-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="testimonial-video-star testimonial-video-star-filled">★</span>
                    ))}
                  </div>
                  <span className="testimonial-video-date">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      {/* Video Modal */}
      {isModalOpen && activeVideo && (
        <div className="testimonial-video-modal-overlay" onClick={closeVideoModal}>
          <div className="testimonial-video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="testimonial-video-modal-close" onClick={closeVideoModal}>
              ×
            </button>
            
            <div className="testimonial-video-modal-content">
              <div className="testimonial-video-modal-player">
                <iframe
                  src={getEmbedUrl(activeVideo.videoId)}
                  title={`${activeVideo.studentName} testimonial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="testimonial-video-modal-iframe"
                ></iframe>
              </div>

              <div className="testimonial-video-modal-info">
                <div className="testimonial-video-modal-student">
                  <h3 className="testimonial-video-modal-name">
                    {activeVideo.studentName}
                    {activeVideo.verified && (
                      <MdVerified className="testimonial-video-modal-verified" />
                    )}
                  </h3>
                  <p className="testimonial-video-modal-course">{activeVideo.course}</p>
                </div>
                
                <p className="testimonial-video-modal-quote">
                  <FaQuoteRight className="testimonial-video-modal-quote-icon" />
                  {activeVideo.comment}
                </p>

                <a 
                  href={activeVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-video-modal-link"
                >
                  Watch on YouTube <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="testimonial-video-pattern"></div>
    </section>
  );
};

export default VideoTestimonials;