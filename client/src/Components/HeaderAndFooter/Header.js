import React, { useState } from "react";
import styles from "./Header.module.css";
import HireResourcesDropdown from "./DropDown/HireResourcesDropdown";
import CompanyDropdown from "./DropDown/CompanyDropdown";
import ServicesDropdown from "./DropDown/ServicesDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <img
            className={styles.headerLogo}
            src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/dianapps_Text_Logo_18eddc42b9.svg"
            alt="dianapps"
          />
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNavLinks}>
          <div className={styles.navItem}>
            <Link to="/AI/ML" className={styles.navLink}>
              <p className={styles.navLinkText}>AI/ML</p>
            </Link>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Services</p>
              <img
                src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/dropdown_f1222a462b.svg"
                alt="dropdownIcon"
                className={styles.navLinkIcon}
              />
            </div>
            <div className={styles.dropdownWrapper}>
              <ServicesDropdown />
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Placements</p>
              <img
                src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/dropdown_f1222a462b.svg"
                alt="dropdownIcon"
                className={styles.navLinkIcon}
              />
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Portfolio</p>
              <img
                src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/dropdown_f1222a462b.svg"
                alt="dropdownIcon"
                className={styles.navLinkIcon}
              />
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Hire Resources</p>
              <img
                src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/dropdown_f1222a462b.svg"
                alt="dropdownIcon"
                className={styles.navLinkIcon}
              />
            </div>
            <div className={styles.dropdownWrapper}>
              <HireResourcesDropdown />
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Company</p>
              <img
                src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/dropdown_f1222a462b.svg"
                alt="dropdownIcon"
                className={styles.navLinkIcon}
              />
            </div>
            <div className={styles.dropdownWrapper}>
              <CompanyDropdown />
            </div>
          </div>
        </div>

        <button className={`${styles.muiButtonContained} ${styles.desktopContactButton}`}>Contact Us</button>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavLinks}>
          <div className={styles.navItem}>
            <Link to="/AI/ML" className={styles.navLink}>
              <p className={styles.navLinkText}>AI/ML</p>
            </Link>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Services</p>
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Placements</p>
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Portfolio</p>
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Hire Resources</p>
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>Company</p>
            </div>
          </div>
          <button className={styles.muiButtonContained}>Contact Us</button>
        </div>
      )}
    </div>
  );
};

export default Header;