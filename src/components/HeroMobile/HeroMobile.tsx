import React from 'react';
import styles from './HeroMobile.module.scss'
import {smoothScroll} from "../Navbar/navHelper";

function HeroMobile() {
  return (
    <section className={`${styles.heroMobileContainer}`}>
      <header className={styles.heroMobileHeader}>
        <h1>LET'S NOTE!</h1>
      </header>

      <div className={styles.btnContainer}>
        <button type={'button'} className={styles.newNoteBtn}>CREATE NEW NOTE</button>
        <a href={"#yourNotes"} onClick={(e) => smoothScroll(e)} className={styles.yourNotesBtn}>YOUR NOTES</a>
      </div>

      <figure className={styles.croppedImgContainer}>
        <img src={"assets/images/Can-cropped.png"} alt="solar system with a can of glowworms instead of sun" />
        <img className={styles.multiply} src={"assets/images/Can-cropped.png"} alt="solar system with a can of glowworms instead of sun" />
      </figure>
    </section>
  );
}

export default HeroMobile;
