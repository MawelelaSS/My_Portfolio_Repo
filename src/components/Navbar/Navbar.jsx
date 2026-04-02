import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Porfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("closeIcon.png")
              : getImageUrl("menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setIsMenuOpen(!menuOpen)}
        />

        <ul
          className={` ${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
