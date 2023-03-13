import React from "react";
import styles from "./nav.module.css";

const Nav = ({ navOpen }) => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  const navLink = links.map((link) => (
    <li key={link}>
      <a href="#">{link}</a>
    </li>
  ));
  return (
    <nav aria-expanded={navOpen} className={styles.nav}>
      <ul>{navLink}</ul>
    </nav>
  );
};

export default Nav;
