import React from 'react';
import Note from "./Note";
import styles from './YourNotes.module.scss'
import {NewNote} from "../../types/Notes";

interface PropTypes {
  notes: NewNote[]
}

function YourNotes({notes}:PropTypes) {


  return (
    <section id={'yourNotes'} className={styles.yourNotesContainer}>
      <header className={styles.yourNotesHeader}>
        <h2>YOUR NOTES</h2>
      </header>

      <div className={styles.notesContainer}>
        <input className={styles.searchbar} type="text" aria-label={'search by keyword'} placeholder={'Search by' +
          ' Keyword'}/>

        {notes.map(note => <Note key={note.id} note={note}/>)}
      </div>

    </section>
  );
}

export default YourNotes;