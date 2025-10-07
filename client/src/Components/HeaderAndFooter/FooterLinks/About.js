import React from "react";
import Header from "../Header";
import styles from "./About.module.css";

const About = () => {
  return (
    <main>
      <Header />
      <section className={styles.aboutContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            We are innovators, empowering the{" "}
            <span className={styles.highlight}>Digital landscape</span>
          </h1>
          <p className={styles.description}>
            At DianApps, we leverage our extensive experience and talented
            resource pool to deliver top-notch IT services for businesses
            globally. Over the years, we have succeeded in keeping up the trust
            placed in us by our customers and established long-term relations.
          </p>
          <button className={styles.knowUsButton}>Get To Know Us</button>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/about_Us_Slide1_8269a7dd1b.webp"
              alt="Team members working in an office"
              className={styles.aboutImage}
            />
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/about_Us_Slide2_43c6b1b2fc.webp"
              alt="Team holding a #weloveDianApps banner"
              className={styles.aboutImage}
            />
            {/* Duplicate images to create continuous marquee effect */}
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/about_Us_Slide1_8269a7dd1b.webp"
              alt="Team members working in an office duplicate"
              className={styles.aboutImage}
            />
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/about_Us_Slide2_43c6b1b2fc.webp"
              alt="Team holding a #weloveDianApps banner duplicate"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
