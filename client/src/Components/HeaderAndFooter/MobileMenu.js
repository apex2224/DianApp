import React, { useState } from 'react';
import styles from './Header.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileNavLink} onClick={onClose}>
        Services
      </div>
      <div className={styles.mobileNavLink} onClick={onClose}>
        Hire Resources
      </div>
      <div className={styles.mobileNavLink} onClick={onClose}>
        Company
      </div>
      <div className={styles.mobileNavLink} onClick={onClose}>
        Contact Us
      </div>
      <button className={styles.muiButtonContained} onClick={onClose}>
        Get Started
      </button>
    </div>
  );
};

export default MobileMenu;