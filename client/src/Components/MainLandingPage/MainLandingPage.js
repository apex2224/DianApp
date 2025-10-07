import React from "react";
import AiHand from "../../assets/AiHand.png";
import styles from "./MainLandingPage.module.css";
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";

const logos = [
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/uber_Eats_28ece482a7.png",
    alt: "uberEats.png",
  },
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/khatabook_8934e53a70.png",
    alt: "khatabook.png",
  },
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Zaggle_5f28f94fc1.png",
    alt: "Zaggle.png",
  },
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/caratlane_5b351cb268.png",
    alt: "caratlane.png",
  },
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/freshworks_87b55dca6d.png",
    alt: "freshworks.png",
  },
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/sinch_7ea5ce9684.svg",
    alt: "sinch.svg",
  },
  {
    src: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/airblack_6791d3239f.svg",
    alt: "airblack.svg",
  },
];

const MainLandingPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Transform Next-Gen IT Needs With <br />
              <span className={styles.highlightText}>
                AI-First Digital Partner
              </span>
            </h1>
            <p className={styles.subheading}>
              We are global IT disruptors leveraging AI-powered capabilities to
              build an ecosystem that takes innovation a step ahead.
            </p>
            <button className={styles.ctaButton}>Speak With Expert</button>
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.heroImage}
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/animation_Home_194d1f8f8b.webp"
              alt="AI-First Digital Partner"
            />
          </div>
        </div>
      </div>
      <div className={styles.logoSliderContainer}>
        <p className={styles.sliderTitle}>
          Building Transforming{" "}
          <span className={styles.highlight}>Partnerships</span> For Global
          Industry Leaders
        </p>
        <div className={styles.logoSlider}>
          <div className={styles.logoTrack}>
            {[...logos, ...logos].map((logo, index) => (
              <div className={styles.logo} key={index}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.growthStorySection}>
        <div className={styles.growthStoryHeader}>
          <p className={styles.growthTitle}>
            Highlighting Our <span className={styles.highlight}>Growth</span>{" "}
            Story
          </p>
          <p className={styles.growthDescription}>
            With collective team efforts and successful product engineering, we
            have grown our ecosystem, made it AI-ready, and worthwhile!
          </p>
        </div>
        <img
          src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Vector_108_aac5f00240.svg"
          alt="divider"
          className={styles.dividerImg}
        />
        <div className={styles.statsContainer}>
          <div className={styles.leftSection}>
            <div className={styles.statCard}>
              <p className={styles.statValue}>89%</p>
              <p className={styles.statLabel}>
                Growth in revenue, driving business success.
              </p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statValue}>200+</p>
              <p className={styles.statLabel}>
                New customers trusting our solutions.
              </p>
            </div>
          </div>
          <div className={styles.centerSection}>
            <div className={`${styles.statCard} ${styles.centerCard}`}>
              <img
                src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/globe_4e73a29d63.webp"
                alt="globe"
                className={styles.cardBg}
              />
              <div className={styles.statContent}>
                <p className={styles.statValue}>350+</p>
                <p className={styles.statLabel}>
                  Successful projects delivered worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.statCard}>
              <p className={styles.statValue}>150+</p>
              <p className={styles.statLabel}>
                Strong team of skilled professionals.
              </p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statValue}>50+</p>
              <p className={styles.statLabel}>
                Expertise in cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottomCardContainer}>
          <div className={`${styles.statCard} ${styles.bottomCard}`}>
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/glob_Type2_6c279abd32.png"
              alt="globe type 2"
              className={styles.cardBg}
            />
            <div className={styles.statContent}>
              <p className={styles.statValue}>8+</p>
              <p className={styles.statLabel}>
                Global presence, expanding across multiple countries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aiSolutionsSection}>
        <div className={styles.aiSolutionsLeft}>
          <h2 className={styles.aiSolutionsTitle}>
            Building Quality{" "}
            <span className={styles.highlight}>AI Solutions</span> for a Smarter
            Future
          </h2>
          <p className={styles.aiSolutionsDescription}>
            The world is marching forward and considering autonomous growth. At
            DianApps, we don’t just use AI in our operations; we tailor its
            usability for customers. Our AI solutions are designed for everyone,
            adapting seamlessly to any industry’s unique needs. No tech
            expertise is required, just a vision, and we’ll handle the rest.
          </p>
        </div>
        <div className={styles.aiSolutionsRight}>
          <img
            src={AiHand}
            alt="AI Solutions"
            className={styles.aiSolutionsImage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLandingPage;
