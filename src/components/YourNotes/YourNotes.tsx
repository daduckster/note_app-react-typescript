import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import styles from './YourNotes.module.scss'

function YourNotes() {
  return (
    <section className={styles.yourNotesContainer}>
      <header className={styles.yourNotesHeader}>
        <h2>YOUR NOTES</h2>
      </header>

      <div className={styles.notesContainer}>
        <input className={styles.searchbar} type="text" aria-label={'search by keyword'} placeholder={'Search by' +
          ' Keyword'}/>

        <article className={styles.note}>
          <div className={styles.firstLine}>
            <h3 className={styles.titleText}>Note Title</h3>
            <div className={styles.btnContainer}>
              <button className={styles.noteIcon} type={'button'}> <FiEdit3 /> </button>
              <button className={styles.noteIcon} type={'button'}> <AiOutlineDelete /> </button>
            </div>
          </div>

          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo mollis lacinia mattis bibendum dui non.
            Malesuada fames massa scelerisque diam auctor mi. Phasellus purus tincidunt mollis vehicula turpis sit vitae
            fames at. Felis aenean urna sed sem dolor in enim.
          </p>

          <p className={styles.tagText}>Tag Text</p>
        </article>

        <article className={styles.note}>
          <div className={styles.firstLine}>
            <h3 className={styles.titleText}>Note Title</h3>
            <div className={styles.btnContainer}>
              <button className={styles.noteIcon} type={'button'}> <FiEdit3 /> </button>
              <button className={styles.noteIcon} type={'button'}> <AiOutlineDelete /> </button>
            </div>
          </div>

          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo mollis lacinia mattis bibendum dui non.
            Malesuada fames massa scelerisque diam auctor mi. Phasellus purus tincidunt mollis vehicula turpis sit vitae
            fames at. Felis aenean urna sed sem dolor in enim.
          </p>

          <p className={styles.tagText}>Tag Text</p>
        </article>

        <article className={styles.note}>
          <div className={styles.firstLine}>
            <h3 className={styles.titleText}>Note Title</h3>
            <div className={styles.btnContainer}>
              <button className={styles.noteIcon} type={'button'}> <FiEdit3 /> </button>
              <button className={styles.noteIcon} type={'button'}> <AiOutlineDelete /> </button>
            </div>
          </div>

          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo mollis lacinia mattis bibendum dui non.
            Malesuada fames massa scelerisque diam auctor mi. Phasellus purus tincidunt mollis vehicula turpis sit vitae
            fames at. Felis aenean urna sed sem dolor in enim.
          </p>

          <p className={styles.tagText}>Tag Text</p>
        </article>
      </div>

    </section>
  );
}

export default YourNotes;