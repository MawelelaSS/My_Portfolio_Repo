import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>hi, I'm Sibusiso </h1>
        <p className={styles.description}>
          I am a full stack developer with 1 year experience using React and
          NodeJS. Reach out if you want to learn more{" "}
        </p>

        <a href="mailto:sibusisosicelomawelela@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img className = {styles.heroImg} src={getImageUrl("heroImage.png")} alt="Hero" />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
