import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sibusiso Mawelela</h1>
        <p className={styles.description}>
          I am a motivated Computer Science graduate from Tshwane University of Technology with a strong focus on full-stack software development.
          Skilled in designing, building, and deploying modern web applications using Java, JavaScript, Python, SQL, React and frameworks like JEE,
          Node.js, and Flask.
            
          I am Passionate about continuous learning, problem-solving, and collaborating to turn complex
          requirements into practical, user-friendly applications.
        </p>

        <a
          href="mailto:sibusisosicelomawelela@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        className={styles.heroImg}
        src={getImageUrl("heroGrad.png")}
        alt="Hero"
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
