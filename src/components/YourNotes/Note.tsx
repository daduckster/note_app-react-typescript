import React, {useState} from 'react';
import styles from './YourNotes.module.scss'
import {FiEdit3} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";
import { NewNote} from "../../types/Notes";

interface PropTypes {
  note:NewNote
  notes: NewNote[]
  removeNote: (filteredNotes:NewNote[]) => void
  addNoteToEdit: (note:NewNote) => void
}

function Note({note, notes, removeNote, addNoteToEdit}:PropTypes) {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  function deleteNote() {
    const id = note.id;
    setIsDeleted(true)

    setTimeout(() => {
      const filteredNotes = notes.filter(note => note.id !== id)
      removeNote(filteredNotes);
      localStorage.setItem('notes', JSON.stringify(filteredNotes));
    },600)
  }

  function passNoteToEdit() {
    addNoteToEdit(note);
  }

  return (
    <article id={note.id} className={`${isDeleted && styles.deleted} ${styles.note}`}>
      <div className={styles.firstLine}>
        <h3 className={styles.titleText}>{note.titleInput}</h3>
        <div className={styles.btnContainer}>
          <button className={styles.noteIcon} type={'button'} onClick={passNoteToEdit}> <FiEdit3 /> </button>
          <button className={styles.noteIcon} type={'button'} onClick={deleteNote}> <AiOutlineDelete /> </button>
        </div>
      </div>

      <p className={styles.noteText}>{note.noteInput}</p>

      <p className={styles.tagText}>{note.tagInput}</p>
    </article>
  );
}

export default Note;