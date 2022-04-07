import React from 'react';
import styles from './NavbarMobile.module.scss'

function NavbarMobile() {
  return (
    <div className={`${styles.navMobileContainer}`}>
      <div className={styles.hamburgerContainer}>
        <img src={"assets/icons/Menu-icon.svg"} alt="menu"/>
      </div>

      <div className={`hidden ${styles.mobileMenuContainer}`}>
        <div className={`${styles.darken}`}/>

        <div className={styles.mobileLinksContainer}>
          <figure>
            <img src={"assets/images/Logo-mobile.svg"} alt="logo do note forget"/>
          </figure>

          <div className={styles.mobileLinks}>
            <a href={"#"} className={`${styles.link}`}>Home</a>
            <a href={"#"} className={`${styles.link}`}>Create new note</a>
            <a href={"#"} className={`${styles.link}`}>Your notes</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;