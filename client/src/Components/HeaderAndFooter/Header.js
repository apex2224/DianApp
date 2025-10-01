import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <span className={styles.logoD}>D</span>ianApps
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#industries">Industries</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#hire" className={styles.activeLink}>
              Hire Developer
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.contactButton}>Contact us</button>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.menuIconBar}></div>
        <div className={styles.menuIconBar}></div>
        <div className={styles.menuIconBar}></div>
      </div>
    </header>
  );
};

export default Header;
