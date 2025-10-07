import React from 'react';
import styles from './CompanyDropdown.module.css';

const companyLinks = [
  { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/about_Us_b5a8d3204c.svg', alt: 'aboutUs.svg', text: 'About Us' },
  { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/career_4dd1b6da96.svg', alt: 'career.svg', text: 'Career' },
  { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/blogs_451a026fdb.svg', alt: 'blogs.svg', text: 'Blogs' }
];

const CompanyDropdown = () => {
  return (
    <div className={styles.dropdownContainer}>
      <p className={styles.dropdownTitle}>OUR COMPANY</p>
      <div className={styles.dropdownList}>
        {companyLinks.map((link, index) => (
          <div className={styles.listItem} key={index}>
            <img src={link.icon} alt={link.alt} className={styles.listIcon} />
            <div className={styles.listTextBox}>
              <p className={styles.listText}>{link.text}</p>
              <img src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/right_Arrow_Without_Bg_b5e07419d9.svg" alt="dropdownIcon" className={styles.listArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDropdown;
