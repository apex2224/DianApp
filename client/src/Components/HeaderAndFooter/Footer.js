import React from "react";
import styles from "./Footer.module.css";

// Data for footer links - makes it easy to update
const quickLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Hire Developer", href: "/hire-developer" },
  { name: "Careers", href: "/careers" },
];

const servicesLinks = [
  { name: "Blockchain Development", href: "/services/blockchain" },
  { name: "Mobile App Development", href: "/services/mobile-app" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Wearable Technology", href: "/services/wearable-tech" },
  { name: "AR/VR Development", href: "/services/ar-vr" },
];

const locations = [
  { name: "Melbourne, Australia", flag: "🇦🇺" },
  { name: "Miami, USA", flag: "🇺🇸" },
  { name: "Jaipur, India", flag: "🇮🇳" },
  { name: "Gurugram, India", flag: "🇮🇳" },
];

const socialIcons = [
  { name: "in", href: "#" },
  { name: "Be", href: "#" },
  { name: "fb", href: "#" },
  { name: "ig", href: "#" },
  { name: "X", href: "#" },
];

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMain}>
        {/* Column 1: Quick Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Services */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Services</h4>
          <ul className={styles.linkList}>
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Locate Us */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Locate Us</h4>
          <ul className={styles.locationList}>
            {locations.map((loc) => (
              <li key={loc.name}>
                <span>{loc.flag}</span> {loc.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Actions & Social */}
        <div className={styles.footerColumn}>
          <button className={styles.enquiryButton}>Project Enquiry &gt;</button>

          <h4 className={styles.columnTitle} style={{ marginTop: "30px" }}>
            Follow Us
          </h4>
          <div className={styles.socialIcons}>
            {/* Note: Replace with actual icons for a real project */}
            <a href="#" className={styles.socialIcon}>
              in
            </a>
            <a href="#" className={styles.socialIcon}>
              Bē
            </a>
            <a href="#" className={styles.socialIcon}>
              f
            </a>
            <a href="#" className={styles.socialIcon}>
              ig
            </a>
            <a href="#" className={styles.socialIcon}>
              X
            </a>
          </div>

          <h4 className={styles.columnTitle} style={{ marginTop: "30px" }}>
            Write For Us
          </h4>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © 2025 DianApps Technologies Pvt. Ltd. All Rights Reserved.
        </p>
        <div className={styles.legalLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/refund-policy">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
