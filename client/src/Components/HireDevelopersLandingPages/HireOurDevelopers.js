import React from "react";
import styles from "./HireOurDevelopers.module.css";

const HireOurDevelopers = () => {
  return (
    <section className={styles.hireOurDevsContainer}>
      <div className={styles.hireOurDevsContent}>
        <h2 className={styles.hireOurDevsHeading}>
          Hire Developers Who Understand Your Project And You!
        </h2>
        <p className={styles.hireOurDevsSubheading}>
          Allow us to find you a perfect fit!
        </p>
        <button className={styles.hireOurDevsButton}>
          Hire our developers &gt;
        </button>
      </div>
    </section>
  );
};

export default HireOurDevelopers;
