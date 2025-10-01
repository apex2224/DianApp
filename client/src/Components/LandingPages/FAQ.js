import React, { useState } from "react";
import styles from "./FAQ.module.css";

// Data for the FAQ accordion
const faqData = [
  {
    question: "How do I hire a good developer?",
    answer:
      "Our comprehensive vetting process ensures you get top-tier talent. We focus on technical skills, communication, and a proactive attitude to find the perfect fit for your project.",
  },
  {
    question: "How skilled and experienced are your developers?",
    answer:
      "Our team consists of developers with a wide range of experience, from mid-level to senior architects, all skilled in the latest technologies and best practices.",
  },
  {
    question: "How much does it cost to hire a developer?",
    answer:
      "Pricing varies based on the developer's experience and the required skillset. We offer competitive rates and flexible engagement models to suit your budget.",
  },
  {
    question: "What are the work hours when I hire coders?",
    answer:
      "We offer flexible work hours to align with your timezone, ensuring smooth collaboration and communication throughout the project lifecycle.",
  },
  {
    question: "Why should I hire developers from DianApps Technologies?",
    answer:
      "You get access to a pool of pre-vetted, highly skilled developers, a streamlined hiring process, and the flexibility to scale your team as needed, all at a competitive price.",
  },
  {
    question:
      "What industry domains are served by developers at DianApps Technologies?",
    answer:
      "Our developers have experience across various domains, including fintech, healthcare, e-commerce, education, and more, bringing valuable industry insights to your project.",
  },
  {
    question: "Will we be having a full-time dedicated developer?",
    answer:
      "Yes, we offer models for full-time dedicated developers who will work exclusively on your project, becoming an integral part of your team.",
  },
  {
    question:
      "What is the ideal time required to assign the team for a project?",
    answer:
      "We can typically assign and onboard a developer or a team within one to two weeks, depending on the project's specific requirements.",
  },
  {
    question: "Will I have complete control over my team?",
    answer:
      "Absolutely. You will have direct communication and complete managerial control over your hired developers, just like your in-house team.",
  },
  {
    question:
      "Do I need to hire more developers even if a couple of them are enough?",
    answer:
      "No, our model is flexible. You can hire as few or as many developers as your project requires, with the ability to scale up or down easily.",
  },
];

const FAQ = () => {
  // State to manage which accordion item is open. Start with the first one open.
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqContainer}>
      <div className={styles.header}>
        <h2 className={styles.mainHeading}>FAQ's</h2>
        <div className={styles.questionMarks}>? ? ?</div>
      </div>

      <div className={styles.staticContent}>
        <h3 className={styles.staticTitle}>How it works?</h3>

        <h4 className={styles.staticSubTitle}>Technologies</h4>
        <p className={styles.staticText}>
          React, Node.js, Python, PHP, Javascript, iOS, Golang, Ruby on Rails,
          Flutter, Android, Angular, JAVA.
        </p>

        <h4 className={styles.staticSubTitle}>
          How much setup cost is required to start
        </h4>
        <p className={styles.staticText}>
          Just one month advance to start with, as we have everything ready. No
          dead money.
        </p>
      </div>

      <div className={styles.accordionGrid}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span
                className={`${styles.plusIcon} ${
                  openIndex === index ? styles.active : ""
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`${styles.faqAnswer} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
