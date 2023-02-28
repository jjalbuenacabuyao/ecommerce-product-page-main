import React from "react";
import { Nav, Cart } from "../../components";
import logo from "../../images/logo.svg";
import user from "../../images/image-avatar.png"
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
        <img src={user} alt="User avatar" className={styles.avatar}/>
      </div>
    </header>
  );
};

export default Header;
