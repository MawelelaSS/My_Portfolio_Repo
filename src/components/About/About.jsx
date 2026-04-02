import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        .
        <img
          className={styles.aboutImage}
          src={getImageUrl("aboutImage.png")}
          alt="about-image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("uiIcon.png")} alt="Skill 1" />

            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I possess the a ability to build responsive, user-friendly web
                interfaces using React, HTML, CSS, and JavaScript. I focus on
                performance, accessibility, and creating smooth user experiences
                across devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Skill 2" />

            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm experienced in building scalable backend systems using
                Node.js, Java, and Python. Experienced in building RESTful APIs,
                handling authentication, and working with databases like MySQL
                and MongoDB.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Skill 3" />

            <div className={styles.aboutItemText}>
              <h3>API and AI Integration</h3>
              <p>
                I integrate third-party APIs, including AI services like OpenAI
                and Google Gemini, to enhance application functionality and
                automation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
