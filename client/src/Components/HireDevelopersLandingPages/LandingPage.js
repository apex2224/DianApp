import React from "react";
import styles from "./LandingPage.module.css";
import Header from "../HeaderAndFooter/Header";
import HireDevelopersSection from "./HireDevelopersSection";
import HireOurDevelopers from "./HireOurDevelopers";
import WhyHire from "./WhyHire";
import SuccessStories from "./SuccessStories";
import FAQ from "./FAQ";
import Footer from "../HeaderAndFooter/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <section className={styles.bbf}>
        {/* Changed from id to className */}
        <img src="/FFB.jpg" alt="Img" />
        <div className={styles.overlay}>
          <div className={styles.blurContainer}>
            <h1>Hire Skilled & Certified Developers</h1>
            <p>
              Whether you are planning to develop the simplest of an application
              or have an idea that requires challenging tools and tactics, we
              have a team of vetted developers who knows what's best for your
              business. Our engineers at DianApps keep up with the latest trends
              and follows a rule of delivering nothing but perfection within the
              said timeframe.
            </p>
            <button className={styles.hireButton}>TALK TO OUR EXPERTS</button>
          </div>
        </div>
      </section>
      <HireDevelopersSection />
      <HireOurDevelopers />
      <WhyHire />
      <SuccessStories />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;