import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">   
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>.

        <img className={styles.aboutImage} src={getImageUrl("aboutImage.png")} alt="about-image" />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Skill 1" />

            <div  className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am an frontend developer with experience in building
                responsive and optimized sites
              </p>
            </div>
          </li>
          <li  className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Skill 2" />

            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer with experience in building RESTful APIs
                and working with databases.
              </p>
            </div>
          </li>

          <li  className={styles.aboutItem}>
            <img src={getImageUrl("uiIcon.png")} alt="Skill 3" />

            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have a good eye for design and can create visually appealing
                user interfaces that enhance the user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
