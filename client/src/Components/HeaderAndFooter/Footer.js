import React from "react";
import About from "./FooterLinks/About";
import styles from "./Footer.module.css";
import { FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

// Data for footer links - makes it easy to update
const quickLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Placements", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Hire Developer", href: "/hire-developer" },
  { name: "Careers", href: "/careers" },
];

const servicesLinks = [
  { name: "AI / ML", href: "/services/ai-ml" },
  { name: "Mobile App Development", href: "/services/mobile-app" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Data Analytics", href: "/services/data-analytics" },
  { name: "Data Science", href: "/services/data-science" },
  { name: "PHP Development", href: "/services/php-development" },
];
const IndustrialTrainings = [
  { name: "Six Week Training", href: "/services/six-week-training" },
  { name: "Six Month Training", href: "/services/six-month-training" },
];

const locations = [
  {
    name: "Mohali, India",
    flag: "🇮🇳",
    address: "D-152, Phase 8, Industrial Area, Mohali, Punjab 160071",
    email: "Email: ziiontechnology@gmail.com",
    phone: "Phone: +91 99888 99285",
  },
];

const socialIcons = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/verma-programming-minds/posts/?feedView=all",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ZiionTechnology",
    icon: FaYoutube,
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=919878564224&text=Hello%21+I%E2%80%99d+like+to+know+more.&type=phone_number&app_absent=0",
    icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ziion_technology/",
    icon: FaInstagram,
  },
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

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Industrial Trainings</h4>
          <ul className={styles.linkList}>
            {IndustrialTrainings.map((link) => (
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
                <div className={styles.locationDetails}>
                  <p>{loc.address}</p>
                  <p>{loc.email}</p>
                  <p>{loc.phone}</p>
                </div>
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
            {socialIcons.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </a>
              );
            })}
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
