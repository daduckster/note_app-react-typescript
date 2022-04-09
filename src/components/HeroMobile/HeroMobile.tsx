import React from 'react';
import styles from './HeroMobile.module.scss'

function HeroMobile() {
  return (
    <section className={`${styles.heroMobileContainer}`}>
      <header className={styles.heroMobileHeader}>
        <h1>LET'S NOTE!</h1>
      </header>

      <div className={styles.btnContainer}>
        <a href={"#"} className={styles.newNoteBtn}>CREATE NEW NOTE</a>
        <a href={"#"} className={styles.yourNotesBtn}>YOUR NOTES</a>
      </div>

      <figure className={styles.croppedImgContainer}>
        <img src={"assets/images/Can-cropped.png"} alt="solar system with a can of glowworms instead of sun" />
        <img className={styles.multiply} src={"assets/images/Can-cropped.png"} alt="solar system with a can of glowworms instead of sun" />
      </figure>
    </section>
  );
}

export default HeroMobile;
