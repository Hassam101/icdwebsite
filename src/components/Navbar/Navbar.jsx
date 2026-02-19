import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaBars,
  FaSearch,
  FaUser,
  FaChevronRight,
  FaYoutube,
} from "react-icons/fa";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);

  const menuData = [
    {
      title: "Our Services",
      mega: true,
      icon: "services",
      content: [
        {
          label: "Learning Resources",
          items: [
            "Up-to-date Resources",
            "Expert Tutors",
            "Digital Library",
            "Modern Facilities",
            "Online Learning Platform",
            "Study Materials",
          ],
        },
        {
          label: "Student Support",
          items: [
            "Academic Counseling",
            "Career Guidance",
            "24/7 Support",
            "Study Groups",
            "Progress Tracking",
            "Workshops & Seminars",
          ],
        },
      ],
    },
    {
      title: "English Excellence",
      mega: true,
      icon: "english",
      content: [
        {
          label: "Learn English",
          items: ["General English"],
        },
        {
          label: "Exam Preparation",
          items: [
            "General English Course",
            "TOEFL",
            "GRE",
            "IELTS ",
            "Password English Language Testing",
            "LanguageCert",
            "Linguaskill",
          ],
        },
        {
          label: "Exam Preparation",
          items: [
            "UKVI SELT exam",
            "CAE",
            "Duolingo",
            "OET",
            "PTE",
            "FCE",
            "KEY",
            "Writing Skills",
            "Speaking Confidence",
          ],
        },
        {
          label: "Exam Booking",
          items: [
            "Book IETLS Exam",
            "Book Language Cert",
            "Book Cambridge English",
            "Book Duolingo Exam",
          ],
        },
      ],
    },
    {
      title: "Teacher Training",
      mega: true,
      icon: "training",
      content: [
        {
          label: "Certification Programs",
          items: [
            "CELTA Certification",
            "TEFL Certification",
            "TESOL Certification",
            "DELTA Certification",
            "TKT Modules",
            "PGCE International",
          ],
        },
        {
          label: "Specialized Training",
          items: [
            "How to Teach IELTS",
            "Teacher’s Passport",
            "Train The Trainer",
          ],
        },
        {
          label: "ICD Training Series",
          items: ["OverView", "Book Your Course"],
        },
        {
          label: "Short Courses",
          items: ["OverView", "Book Your Course"],
        },
      ],
    },
    { title: "Events", path: "/events" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const toggleMega = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveIndex(null);
    document.body.classList.remove("menu-open");
  };

  const handleMenuItemClick = (index, hasMega) => {
    if (window.innerWidth <= 992 && hasMega) {
      toggleMega(index);
    } else if (!hasMega) {
      closeMobileMenu();
    }
  };

  return (
    <header
      ref={navRef}
      className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      {/* --- TOP BAR --- */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <span className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>ICD House 107, Mumdot block, Mustafa Town, Lahore</span>
            </span>
            <span className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:info@icd.org.pk">info@icd.org.pk</a>
            </span>
            <span className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <a href="tel:+923111999100">+92-3-111-999-100</a>
            </span>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/icdpakistan"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPtKEvwqsvvXh_eKk2-wi3A"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/icdpakistan"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/icd-pakistan/"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className={styles.utilityLinks}>
              <a
                href="https://portal.icd.org.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Portal
              </a>
              <a
                href="https://store.icd.org.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online Store
              </a>
              <a href="#">Verify ICD Certificate</a>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logoLink}>
              <img
                src={logoImg}
                alt="ICD Education"
                className={styles.logoImage}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navLinks}>
              {menuData.map((menu, index) => (
                <li
                  key={index}
                  className={`${menu.mega ? styles.hasMega : ""} ${activeIndex === index ? styles.active : ""}`}
                  onMouseEnter={() =>
                    menu.mega &&
                    window.innerWidth > 992 &&
                    setActiveIndex(index)
                  }
                  onMouseLeave={() =>
                    menu.mega && window.innerWidth > 992 && setActiveIndex(null)
                  }
                >
                  <Link
                    to={menu.path || "#"}
                    className={styles.navLink}
                    onClick={(e) => {
                      if (menu.mega && window.innerWidth <= 992) {
                        e.preventDefault();
                        handleMenuItemClick(index, true);
                      } else if (!menu.mega) {
                        handleMenuItemClick(index, false);
                      }
                    }}
                  >
                    {menu.title}
                    {menu.mega && <FaChevronDown className={styles.chevron} />}
                  </Link>

                  {menu.mega && (
                    <div
                      className={`${styles.megaMenu} ${activeIndex === index ? styles.active : ""}`}
                    >
                      <div className={styles.megaMenuContainer}>
                        <div className={styles.megaGrid}>
                          {menu.content.map((section, sIdx) => (
                            <div key={sIdx} className={styles.megaColumn}>
                              <h4 className={styles.megaTitle}>
                                <span className={styles.megaIcon}>
                                  {section.label.charAt(0)}
                                </span>
                                {section.label}
                              </h4>
                              <ul className={styles.megaList}>
                                {section.items.map((item, iIdx) => (
                                  <li key={iIdx}>
                                    <a href="#" onClick={closeMobileMenu}>
                                      <FaChevronRight
                                        className={styles.megaItemIcon}
                                      />
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className={styles.navActions}>
            <button className={styles.applyBtn}>
              <span className={styles.applyText}>Apply Now</span>
              <span className={styles.applyIcon}>→</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className={styles.searchBar}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search courses, programs, or information..."
                className={styles.searchInput}
              />
              <button className={styles.searchSubmit}>
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileNavContent}>
          <ul className={styles.mobileNavLinks}>
            {menuData.map((menu, index) => (
              <li
                key={index}
                className={`${menu.mega ? styles.hasMegaMobile : ""} ${activeIndex === index ? styles.mobileActive : ""}`}
              >
                <div className={styles.mobileMenuItem}>
                  <Link
                    to={menu.path || "#"}
                    className={styles.mobileNavLink}
                    onClick={(e) => {
                      if (menu.mega) {
                        e.preventDefault();
                        handleMenuItemClick(index, true);
                      } else {
                        closeMobileMenu();
                      }
                    }}
                  >
                    {menu.title}
                  </Link>
                  {menu.mega && (
                    <button
                      className={styles.mobileToggleButton}
                      onClick={() => handleMenuItemClick(index, true)}
                      aria-label={`Toggle ${menu.title} menu`}
                    >
                      {activeIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  )}
                </div>

                {menu.mega && (
                  <div
                    className={`${styles.mobileMegaMenu} ${activeIndex === index ? styles.active : ""}`}
                  >
                    <div className={styles.mobileMegaContent}>
                      {menu.content.map((section, sIdx) => (
                        <div key={sIdx} className={styles.mobileMegaSection}>
                          <h5 className={styles.mobileMegaTitle}>
                            {section.label}
                          </h5>
                          <ul className={styles.mobileMegaList}>
                            {section.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <a href="#" onClick={closeMobileMenu}>
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <button className={styles.mobileApplyBtn} onClick={closeMobileMenu}>
              Apply Now
            </button>
            <div className={styles.mobileContact}>
              <h4>Contact Us</h4>
              <p>
                <FaPhone className={styles.icon} />
                <a href="tel:+923111999100">+92-3-111-999-100</a>
              </p>
              <p>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:info@icd.org.pk">info@icd.org.pk</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu} />
      )}
    </header>
  );
};

export default Navbar;
