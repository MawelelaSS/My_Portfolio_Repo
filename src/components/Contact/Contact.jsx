import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className= {styles.container} id="contacts">
      <div className= {styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>

      <ul className= {styles.links}>
        <li className= {styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="sibusisosicelomawelela@gmail.com">sibusisosicelomawelela@gmail.com</a>
        </li>

        <li className= {styles.link}>
          <img src={getImageUrl("linkedinIcon.png")} alt="Email icon" />
          <a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9F05CDP5Qp6j2kjlaaH1bQ%3D%3D">
            LinkedIn.com/Sibusiso-Mawelela
          </a>
        </li>

        <li className= {styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Email icon" />
          <a href="https://github.com/MawelelaSS">github.com/MawelelaSS</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
