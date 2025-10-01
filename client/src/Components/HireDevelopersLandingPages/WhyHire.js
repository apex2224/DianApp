import React, { useState } from "react";
import styles from "./WhyHire.module.css";

// Data for the benefits grid
const benefitsData = [
  {
    title: "Half the price",
    description:
      "We get you the top developers on the space at half the market service quote. Our base price starts at $42 per hour.",
  },
  {
    title: "50+ skills",
    description:
      "We have a diverse team with expertise in over 50+ skills, ensuring we can meet your specific project needs.",
  },
  {
    title: "Global quality standards",
    description:
      "We ensure that our developers adhere to global quality standards, delivering top-notch solutions.",
  },
  {
    title: "Aligned timezone",
    description:
      "Our developers work in your timezone, ensuring seamless communication and collaboration.",
  },
  {
    title: "Complete flexibility",
    description:
      "We offer complete flexibility in terms of engagement models, allowing you to scale your team as needed.",
  },
  {
    title: "24*7 support",
    description:
      "Our support team is available 24/7 to assist you with any queries or issues.",
  },
  {
    title: "Daily updates",
    description:
      "We provide daily updates on the progress of your project, ensuring transparency and collaboration.",
  },
  {
    title: "Extensive interview",
    description:
      "We conduct extensive interviews to ensure the best fit for your project requirements.",
  },
];

const WhyHire = () => {
  // State to track the currently active/hovered card
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.whyHireContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.mainHeading}>
          Why Hire Developers From DianApps?
        </h2>
        <p className={styles.description}>
          DianApps holds a profound knowledge and skillset in developing
          applications for Android, iOS, and web and are keen on every industry
          in the market. Apart from it, the team understands what it takes to
          start a project. The rigorous ideas, plannings, and developing a
          software that becomes a sensation, hence help you be the change in the
          market with our utmost competitive pricings and high-performance
          functionalities.
        </p>

        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`${styles.benefitCard} ${
                activeIndex === index ? styles.activeCard : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              {/* Only show the description for the active card */}
              {activeIndex === index && benefit.description && (
                <p className={styles.cardDescription}>{benefit.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
