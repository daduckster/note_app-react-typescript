import React, {useState} from 'react';
import styles from './NavbarMobile.module.scss'
import {smoothScroll} from "./navHelper";

function NavbarMobile() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function toggleMenu(): void {
    setShowMenu(!showMenu);
  }

  return (
    <div className={`${styles.navMobileContainer}`}>
      <div className={styles.hamburgerContainer} onClick={toggleMenu}>
        <img src={"assets/icons/Menu-icon.svg"} alt="menu"/>
      </div>

      {showMenu && (
        <div className={`mobileMenu ${styles.mobileMenuContainer}`}>
          <div className={`${styles.darken}`} onClick={toggleMenu}/>

          <div className={styles.mobileLinksContainer}>
            <figure>
              <img src={"assets/images/Logo-mobile.svg"} alt="logo do note forget"/>
            </figure>

            <div className={styles.mobileLinks}>
              <a href={"#home"} onClick={(e) => {
                smoothScroll(e);
                toggleMenu()
              }} className={`${styles.link}`}>Home</a>
              <a href={"#newNotes"} onClick={(e) => {
                smoothScroll(e);
                toggleMenu()
              }} className={`${styles.link}`}>Create new note</a>
              <a href={"#yourNotes"} onClick={(e) => {
                smoothScroll(e);
                toggleMenu()
              }} className={`${styles.link}`}>Your notes</a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default NavbarMobile;