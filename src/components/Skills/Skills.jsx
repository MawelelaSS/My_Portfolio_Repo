import React from 'react'
import styles from "./Skills.module.css";
import skills from "../../data/skillAndCapabilities.json";
import softSkills from "../../data/softSkills.json";
import { getImageUrl } from "../../utils";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skillLayout}>
        <aside className={styles.softSkills}>
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </aside>

        <div className={styles.hardSkills}>
          {skills.map((skill, id) => (
            <SkillsCard key={id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
