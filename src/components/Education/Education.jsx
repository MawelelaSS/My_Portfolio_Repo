import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.educationLayout}>
        <div className={styles.timeline}>
          {education.map((item, index) => (
            <div className={styles.cardItem} key={index}>
              <div className={styles.card}>
                <p className={styles.date}>{item.startDate} - {item.endDate}</p>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.connector}>
          {education.map((_, index) => {
            const isCurrent = index === education.length - 1;
            const isCompleted = index < education.length - 1;
            return (
              <span
                key={index}
                className={`${styles.connectorDot} ${isCurrent ? styles.currentDot : ''} ${isCompleted ? styles.completedDot : ''}`}
              ></span>
            );
          })}
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={getImageUrl("timeline.png")}
            alt="Education illustration"
            className={styles.educationImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
