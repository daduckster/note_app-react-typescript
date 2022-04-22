import React from 'react';
import styles from './YourNotes.module.scss'
import {FiEdit3} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";
import {NewNote} from "../../types/Notes";

interface PropTypes {
  note:NewNote
}

function Note({note}:PropTypes) {
  return (
    <article className={styles.note}>
      <div className={styles.firstLine}>
        <h3 className={styles.titleText}>{note.titleInput}</h3>
        <div className={styles.btnContainer}>
          <button className={styles.noteIcon} type={'button'}> <FiEdit3 /> </button>
          <button className={styles.noteIcon} type={'button'}> <AiOutlineDelete /> </button>
        </div>
      </div>

      <p className={styles.noteText}>{note.noteInput}</p>

      <p className={styles.tagText}>{note.tagInput}</p>
    </article>
  );
}

export default Note;