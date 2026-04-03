import React from "react";
import styles from "./SkillsCard.module.css";
import { getImageUrl } from "../../utils";

const SkillsCard = ({skill}) => {
  return (
      <div className={styles.skillItem}>
        <div className={styles.skillHeader}>
          <img
            src={getImageUrl(skill.imageSrc)}
            alt={skill.title}
            className={styles.image}
          />
          <div className={styles.skillInfo}>
            <h3 className={styles.title}>{skill.title}</h3>
            <span className={styles.percentage}>{skill.level}%</span>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
  );
};

export default SkillsCard;
