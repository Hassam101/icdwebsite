import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaGoogle, FaQuoteRight } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import './GoogleReviews.css';

// Placeholder reviews - Replace these with your actual Google Reviews data
const reviewsData = [
  {
    id: 1,
    reviewerName: 'Sarah Ahmed',
    reviewerImage: 'https://randomuser.me/api/portraits/women/44.jpg', // Replace with actual images
    rating: 5,
    date: '2 weeks ago',
    comment: 'Excellent teaching methodology! The instructors are very knowledgeable and supportive. The online learning platform is user-friendly and well-organized.',
    source: 'Google',
    verified: true
  },
  {
    id: 2,
    reviewerName: 'Muhammad Ali',
    reviewerImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    date: '1 month ago',
    comment: 'I completed my ICD course here and got immediate recognition. The faculty especially Saima Nazir is outstanding. Highly recommended!',
    source: 'Google',
    verified: true
  },
  {
    id: 3,
    reviewerName: 'Fatima Khan',
    reviewerImage: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 4.5,
    date: '3 weeks ago',
    comment: 'Great learning environment with flexible timing. The digital library resources are comprehensive. Would give 5 stars if they had more weekend batches.',
    source: 'Google',
    verified: true
  },
  {
    id: 4,
    reviewerName: 'Omar Hassan',
    reviewerImage: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    date: '2 months ago',
    comment: 'Transformative experience! The TESOL training with Rameesha Haris was exceptional. The practical teaching strategies learned here are invaluable.',
    source: 'Google',
    verified: true
  },
  {
    id: 5,
    reviewerName: 'Zainab Malik',
    reviewerImage: 'https://randomuser.me/api/portraits/women/90.jpg',
    rating: 5,
    date: '1 week ago',
    comment: 'Professional setup with amazing support staff. The ICD portal makes it easy to track progress. Definitely the best choice for teacher training.',
    source: 'Google',
    verified: true
  },
  {
    id: 6,
    reviewerName: 'Ahmed Raza',
    reviewerImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 4,
    date: '3 weeks ago',
    comment: 'Good course material and experienced instructors. The accommodation service for outstation students is a big plus. Overall satisfied.',
    source: 'Google',
    verified: true
  }
];

const GoogleReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviews, setReviews] = useState(reviewsData);
  
  // Calculate average rating
  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const fiveStarCount = reviews.filter(r => r.rating >= 4.5).length;
  const fourStarCount = reviews.filter(r => r.rating >= 3.5 && r.rating < 4.5).length;

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="google-reviews-star google-reviews-star-filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="google-reviews-star google-reviews-star-half" />);
      } else {
        stars.push(<FaRegStar key={i} className="google-reviews-star google-reviews-star-empty" />);
      }
    }
    return stars;
  };

  const handleViewAllReviews = () => {
    window.open('https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID', '_blank');
  };

  const handleReadMore = (reviewId) => {
    console.log('Read more for review:', reviewId);
    // Implement read more functionality
  };

  return (
    <section className="google-reviews-section">
      <div className="google-reviews-container">
        {/* Header with Google Rating */}
        <div className="google-reviews-header">
          <div className="google-reviews-header-left">
            <div className="google-reviews-badge">
              <FaGoogle className="google-reviews-icon" />
              <span className="google-reviews-text">Google Reviews</span>
            </div>
            <h2 className="google-reviews-title">
              What Our Students Say
              <span className="google-reviews-title-underline"></span>
            </h2>
          </div>
          
          <div className="google-reviews-rating-summary">
            <div className="google-reviews-average-rating">
              <span className="google-reviews-rating-number">{averageRating}</span>
              <div className="google-reviews-stars-container">
                <div className="google-reviews-stars">
                  {renderStars(parseFloat(averageRating))}
                </div>
                <span className="google-reviews-total">Based on {totalReviews} reviews</span>
              </div>
            </div>
            
            <div className="google-reviews-rating-breakdown">
              <div className="google-reviews-rating-bar">
                <span className="google-reviews-rating-label">5 stars</span>
                <div className="google-reviews-progress-bar">
                  <div 
                    className="google-reviews-progress-fill" 
                    style={{ width: `${(fiveStarCount / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="google-reviews-rating-count">{fiveStarCount}</span>
              </div>
              <div className="google-reviews-rating-bar">
                <span className="google-reviews-rating-label">4 stars</span>
                <div className="google-reviews-progress-bar">
                  <div 
                    className="google-reviews-progress-fill" 
                    style={{ width: `${(fourStarCount / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="google-reviews-rating-count">{fourStarCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="google-reviews-carousel">
          <div 
            className="google-reviews-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, groupIndex) => (
              <div key={groupIndex} className="google-reviews-group">
                {reviews.slice(groupIndex * 3, groupIndex * 3 + 3).map((review) => (
                  <div key={review.id} className="google-reviews-card">
                    <div className="google-reviews-card-header">
                      <div className="google-reviews-reviewer-info">
                        <h4 className="google-reviews-reviewer-name">
                          {review.reviewerName}
                          {review.verified && <MdVerified className="google-reviews-verified-badge" />}
                        </h4>
                        <div className="google-reviews-review-meta">
                          <div className="google-reviews-review-stars">
                            {renderStars(review.rating)}
                          </div>
                          <span className="google-reviews-review-date">{review.date}</span>
                        </div>
                      </div>
                      <FaQuoteRight className="google-reviews-quote-icon" />
                    </div>
                    
                    <p className="google-reviews-comment">
                      {review.comment.length > 150 
                        ? `${review.comment.substring(0, 150)}...` 
                        : review.comment}
                    </p>
                    
                    {review.comment.length > 150 && (
                      <button 
                        onClick={() => handleReadMore(review.id)} 
                        className="google-reviews-read-more"
                      >
                        Read more
                      </button>
                    )}
                    
                    <div className="google-reviews-footer">
                      <span className="google-reviews-source">
                        <FaGoogle className="google-reviews-source-icon" /> {review.source}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="google-reviews-dots">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`google-reviews-dot ${currentSlide === index ? 'google-reviews-dot-active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="google-reviews-view-all">
          <button onClick={handleViewAllReviews} className="google-reviews-view-all-btn">
            View All Google Reviews
            <svg className="google-reviews-btn-arrow" viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="google-reviews-pattern"></div>
    </section>
  );
};

export default GoogleReviews;