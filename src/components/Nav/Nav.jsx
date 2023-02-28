import React from "react";
import styles from "./nav.module.css";

const Nav = () => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  const navLink = links.map((link) => (
    <li>
      <a href="#">{link}</a>
    </li>
  ));
  return (
    <nav className={styles.nav}>
      <ul>{navLink}</ul>
    </nav>
  );
};

export default Nav;
