import React from 'react';
import styles from './Navbar.module.scss'
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <NavbarMobile />
      <div className={`${styles.desktopLinks}`}>
        <figure className={styles.logo}>
          <img src={"assets/images/Logo.svg"} alt="logo note forget"/>
        </figure>
        <div className={styles.linkContainer}>
          <a href={"#"} className={`${styles.link}`}>Home</a>
          <a href={"#"} className={`${styles.link}`}>Your notes</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;