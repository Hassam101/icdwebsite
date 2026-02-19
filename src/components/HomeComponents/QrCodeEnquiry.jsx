import React from 'react';
import { FaQrcode } from 'react-icons/fa';
import './QrCodeEnquiry.css';

// Import QR code from assets folder
import qrCodeImage from '../../assets/QrCodeEnquiry.png';

const QrCodeEnquiry = () => {
  return (
    <section className="qrcode-enquiry-section">
      <div className="qrcode-enquiry-container">
        {/* Two Column Layout */}
        <div className="qrcode-enquiry-grid">
          {/* Left Column - QR Code */}
          <div className="qrcode-enquiry-qr-column">
            <div className="qrcode-enquiry-card">
              <div className="qrcode-enquiry-icon-wrapper">
                <FaQrcode className="qrcode-enquiry-main-icon" />
              </div>
              
              <div className="qrcode-enquiry-image-container">
                <img 
                  src={qrCodeImage} 
                  alt="Enquiry QR Code" 
                  className="qrcode-enquiry-image"
                />
              </div>
              
              <p className="qrcode-enquiry-instruction">
                Scan QR code to submit enquiry
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="qrcode-enquiry-content-column">
            <h2 className="qrcode-enquiry-title">
              Quick Enquiry
            </h2>
            
            <p className="qrcode-enquiry-description">
              Submit your enquiry instantly through our secure QR code portal.
            </p>
            
            <a 
              href="https://portal.icd.org.pk/lead-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="qrcode-enquiry-button"
            >
              Submit Your Enquiry
              <span className="qrcode-enquiry-button-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrCodeEnquiry;