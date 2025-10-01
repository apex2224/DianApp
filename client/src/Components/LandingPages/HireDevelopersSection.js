import React, { useState } from "react";
import styles from "./HireDevelopersSection.module.css";

// --- Data for the tabs ---
// This approach is much cleaner than hardcoding JSX.
const hiringSteps = [
  {
    title: "Tell Us Your Requirements",
    description: "We'll schedule a call to gather your project requirements.",
  },
  {
    title: "We Shortlist The Best Talents",
    description: "We find the best fit out of 120+ developers in-house.",
  },
  {
    title: "Take Their Interview",
    description: "Meet the developers and see if they are the right fit.",
  },
  {
    title: "Hire The Developers",
    description:
      "Hire the best developers that meet your requirements and culture.",
  },
];

const skillsData = [
  {
    name: "React Native",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/react-native.svg",
    link: "#",
  },
  {
    name: "Veu.JS",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/vuejs.svg",
    link: "#",
  },
  {
    name: "JavaScript",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/javascript.svg",
    link: "#",
  },
  {
    name: "React.js",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/react-js.svg",
    link: "#",
  },
  {
    name: "AWS",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/aws.svg",
    link: "#",
  },
  {
    name: "Salesforce",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/salesforce.svg",
    link: "#",
  },
  {
    name: "NodeJS",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/node.svg",
    link: "#",
  },
  {
    name: "PHP",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/php.svg",
    link: "#",
  },
  {
    name: "Python",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/python.svg",
    link: "#",
  },
  {
    name: "iOS",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/ios.svg",
    link: "#",
  },
  {
    name: "GoLang",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/golang.svg",
    link: "#",
  },
  {
    name: "Ruby on Rails",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/ruby.svg",
    link: "#",
  },
  {
    name: "Flutter",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/flutter.svg",
    link: "#",
  },
  {
    name: "Android",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/android.svg",
    link: "#",
  },
  {
    name: "Angular",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/angular.svg",
    link: "#",
  },
  {
    name: "JAVA",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/java.svg",
    link: "#",
  },
];

const rolesData = [
  {
    name: "Frontend",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/frontend.svg",
    link: "#",
  },
  {
    name: "Backend",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/backend.svg",
    link: "#",
  },
  {
    name: "Fullstack",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/fullstack.svg",
    link: "#",
  },
];

const trajectoryData = [
  {
    name: "Beginner",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/beginner.svg",
    link: "#",
  },
  {
    name: "Expert",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/expert.svg",
    link: "#",
  },
  {
    name: "Advance",
    icon: "https://d2e3cmtjkfw2a3.cloudfront.net/static/media/developer/advance.svg",
    link: "#",
  },
];

const tabs = [
  { id: "skills", title: "Based on Skills", data: skillsData },
  { id: "roles", title: "Based on Roles", data: rolesData },
  {
    id: "trajectory",
    title: "Based on Career Trajectory",
    data: trajectoryData,
  },
];

const HireDevelopersSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const renderContent = () => {
    const tab = tabs.find((t) => t.id === activeTab);
    if (!tab) return null;

    return (
      <div className={styles.techGrid}>
        {tab.data.map((tech) => (
          <a href={tech.link} key={tech.name} className={styles.techItem}>
            <div className={styles.techIconContainer}>
              <img
                src={tech.icon}
                alt={tech.name}
                className={styles.techIcon}
              />
            </div>
            <span className={styles.techName}>{tech.name}</span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.hireSection}>
      <div className={styles.container}>
        <h2 className={styles.hireHeading}>Hire DianApps Developers</h2>
        <div className={styles.tabsContainer}>
          <div className={styles.tabList}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className={styles.tabContent}>{renderContent()}</div>
        </div>
        <div className={styles.hiringProcessSection}>
          <h2 className={styles.processHeading}>
            How To Hire Top Remote{" "}
            <span className={styles.highlight}>Developers</span> Through
            DianApps?
          </h2>
          <div className={styles.stepsGrid}>
            {hiringSteps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.workButton}>Work With Developers</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDevelopersSection;
