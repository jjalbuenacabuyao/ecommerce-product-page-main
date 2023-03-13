import React, { useState } from "react";
import { Nav, Cart } from "../../components";
import { logo, avatar } from "../../images";
import styles from "./header.module.css";

const Header = ({order, setOrder}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.toggler__logo}>
        <button data-toggled={navOpen} className={styles.nav__toggler} onClick={() => setNavOpen(!navOpen)}>
          <span className="sr-only">Toggle navigation</span>
        </button>
        <a href="#">
          <img src={logo} alt="Sneakers logo" />
        </a>
        <Nav navOpen={navOpen} />
      </div>

      <div className={styles.cart__user}>
        <Cart order={order} setOrder={setOrder} />
        <img src={avatar} alt="User avatar" className={styles.avatar}/>
      </div>
    </header>
  );
};

export default Header;
