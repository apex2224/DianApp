import React, { useState } from 'react';
import styles from './ServicesDropdown.module.css';

const services = [
  {
    category: 'Application Development',
    icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg',
    main: {
      title: 'Mobile App Development Services',
      subtitle: 'Build scalable, high-performing apps for every device & platform.',
      icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg',
      links: [
        { title: 'IOS App Development', subtitle: 'High-performance iOS apps for seamless user experiences.' },
        { title: 'Android App Development', subtitle: 'Custom Android apps for diverse business verticals.' },
        { title: 'Flutter App Development', subtitle: 'Fast, cross-platform apps using Flutter technology.' },
        { title: 'React Native App Development', subtitle: 'Flexible, native-like apps using React Native framework.' },
        { title: 'Super App Development', subtitle: 'Multi-service super apps for ultimate user convenience.' }
      ]
    }
  },
  {
    category: 'Website Development',
    icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
    main: {
      title: 'Website Development Services',
      subtitle: 'Creating responsive and high-performing websites.',
      icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
      links: [
        { title: 'Corporate Websites', subtitle: 'Professional websites for your business.' },
        { title: 'E-commerce Solutions', subtitle: 'Scalable online stores.' },
      ]
    }
  },
  {
    category: 'Salesforce Development',
    icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
    main: {
      title: 'Salesforce Development Services',
      subtitle: 'Custom Salesforce solutions to streamline your business processes.',
      icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
      links: [
        { title: 'Salesforce Consulting', subtitle: 'Expert advice to get the most out of Salesforce.' },
        { title: 'AppExchange Development', subtitle: 'Custom apps for the Salesforce AppExchange.' },
      ]
    }
  },
  {
    category: 'Digital Marketing',
    icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
    main: {
      title: 'Digital Marketing Services',
      subtitle: 'Boost your online presence and reach your target audience.',
      icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
      links: [
        { title: 'SEO Services', subtitle: 'Improve your search engine rankings.' },
        { title: 'Social Media Marketing', subtitle: 'Engage with your audience on social media.' },
      ]
    }
  },
  {
    category: 'Trending Solutions',
    icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
    main: {
      title: 'Trending Solutions',
      subtitle: 'Innovative solutions to keep you ahead of the curve.',
      icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/mobile_504ed5fe76.svg', // Placeholder
      links: [
        { title: 'AI & Machine Learning', subtitle: 'Harness the power of AI.' },
        { title: 'Blockchain Development', subtitle: 'Decentralized solutions for your business.' },
      ]
    }
  }
];

const ServicesDropdown = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.sidebar}>
        <p className={styles.sidebarTitle}>Our Services</p>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.sidebarItem} ${service.category === activeService.category ? styles.active : ''}`}
            onMouseEnter={() => setActiveService(service)}
          >
            <img src={service.icon} alt={service.category} className={styles.sidebarIcon} />
            <span>{service.category}</span>
          </div>
        ))}
      </div>
      <div className={styles.mainContent}>
        <div className={styles.mainHeader}>
          <img src={activeService.main.icon} alt={activeService.category} className={styles.mainIcon} />
          <div>
            <p className={styles.mainTitle}>{activeService.main.title}</p>
            <p className={styles.mainSubtitle}>{activeService.main.subtitle}</p>
          </div>
        </div>
        <div className={styles.mainLinks}>
          {activeService.main.links.map((link, index) => (
            <a href="#" className={styles.mainLinkItem} key={index}>
              <div>
                <p className={styles.mainLinkTitle}>{link.title}</p>
                <p className={styles.mainLinkSubtitle}>{link.subtitle}</p>
              </div>
              <img src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/right_Arrow_Without_Bg_b5e07419d9.svg" alt="arrow" className={styles.mainLinkArrow} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
