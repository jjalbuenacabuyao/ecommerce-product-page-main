import React from "react";
import { Nav, Cart } from "../../components";
import { logo, avatar } from "../../images";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.toggler__logo}>
        <button className={styles.nav__toggler}>
          <span className="sr-only">Toggle navigation</span>
        </button>
        <a href="#">
          <img src={logo} alt="Sneakers logo" />
        </a>
        <Nav />
      </div>

      <div className={styles.cart__user}>
        <Cart />
        <img src={avatar} alt="User avatar" className={styles.avatar}/>
      </div>
    </header>
  );
};

export default Header;
