import React from "react";
import styles from "./SuccessStories.module.css";

// Data for the success stories gallery
const storiesData = [
  {
    image: "https://placehold.co/600x400/222/fff?text=Client+A",
    title: "Co-working Space",
    category: "Collaboration",
    showOverlay: false,
  },
  {
    image: "https://placehold.co/600x400/333/fff?text=Minimalist",
    title: "Minimalist",
    category: "Design / Development",
    showOverlay: true,
  },
  {
    image: "https://placehold.co/600x400/444/fff?text=AI+Project",
    title: "AI Innovation",
    category: "Technology",
    showOverlay: false,
  },
  {
    image: "https://placehold.co/600x400/555/fff?text=Real+Estate",
    title: "PropTech Solution",
    category: "Real Estate",
    showOverlay: false,
  },
  {
    image: "https://placehold.co/600x400/666/fff?text=Zebpay",
    title: "Zebpay",
    category: "Fintech",
    showOverlay: true,
  },
];

const SuccessStories = () => {
  return (
    <section className={styles.successStoriesContainer}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.mainHeading}>Success Stories</h2>
          <p className={styles.subHeading}>We did it together....</p>
        </div>
        <button className={styles.viewAllButton}>SEE EVERYTHING</button>
      </div>

      <div className={styles.storiesGallery}>
        {storiesData.map((story, index) => (
          <div key={index} className={styles.storyCard}>
            <img
              src={story.image}
              alt={story.title || "Success Story"}
              className={styles.storyImage}
            />
            {story.showOverlay && (
              <div className={styles.storyOverlay}>
                <div className={styles.overlayContent}>
                  <h4 className={styles.storyTitle}>{story.title}</h4>
                  <p className={styles.storyCategory}>{story.category}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
