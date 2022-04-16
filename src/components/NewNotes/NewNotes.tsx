import React from 'react';
import styles from './NewNotes.module.scss'

function NewNotes() {
  return (
    <section className={styles.newNotesContainer}>
      <header className={styles.newNotesHeader}>
        <h1>LET'S NOTE</h1>
      </header>

      <form className={styles.newNotesForm}>
        <div>
          <label className={styles.label} htmlFor="note-title">Title (optional):</label>
          <input className={styles.textInput} type="text" id={'note-title'}/>
        </div>

        <div>
          <label className={styles.label} htmlFor="note-text">Type your note:</label>
          <textarea className={styles.textarea} id={'note-text'}/>
        </div>

        <div>
          <label className={styles.label} htmlFor="note-tag">Tag (optional):</label>
          <div className={styles.lastLineContainer}>
            <input className={`${styles.textInput} ${styles.tagInput}`} type="text" id={'note-tag'}/>
            <input className={styles.submitBtn} type="submit" value={"CREATE NOTE"}/>
          </div>
        </div>

        <object className={styles.animationSvg} aria-label="Animation of a solar system with a can instead of sun" type="image/svg+xml"
                data={"assets/animations/Animated.svg"}/>
      </form>
    </section>
  );
}

export default NewNotes;