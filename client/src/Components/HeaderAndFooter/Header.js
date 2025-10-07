import React from "react";
import styles from "./Header.module.css";
import HireResourcesDropdown from "./HireResourcesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import ServicesDropdown from "./ServicesDropdown";

const Header = () => {
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
        <div className={styles.navLinks}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              <p className={styles.navLinkText}>AI/ML</p>
            </div>
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
        <button className={styles.muiButtonContained}>Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
