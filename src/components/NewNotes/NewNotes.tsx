import React, {useState} from 'react';
import styles from './NewNotes.module.scss'
import {InputEvent, NewNote, SubmitEvent} from '../../types/Notes'
import {createNote} from "./newNotesHelper";

interface PropTypes {
  addNote: (newNote:NewNote) => void
}

function NewNotes({addNote}:PropTypes) {
  const [inputData, setInputData] = useState({titleInput: '', noteInput: '', tagInput: ''})

  function handleChange(e:InputEvent) {
    const {name, value} = e.target;
    setInputData({...inputData, [name]: value})
  }

  function handleSubmit(e:SubmitEvent){
    e.preventDefault();
    const newNote = createNote(inputData);
    setInputData({titleInput: '', noteInput: '', tagInput: ''})
    addNote(newNote)
  }

  return (
    <section id={'newNotes'} className={styles.newNotesContainer}>
      <header className={styles.newNotesHeader}>
        <h1>LET'S NOTE</h1>
      </header>

      <form className={styles.newNotesForm} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="note-title">Title (optional):</label>
          <input className={styles.textInput} type="text" id={'note-title'} name={'titleInput'} value={inputData.titleInput} onChange={handleChange}/>
        </div>

        <div>
          <label className={styles.label} htmlFor="note-text">Type your note:</label>
          <textarea className={styles.textarea} id={'note-text'} name={'noteInput'} value={inputData.noteInput} onChange={handleChange} required={true}/>
        </div>

        <div>
          <label className={styles.label} htmlFor="note-tag">Tag (optional):</label>
          <div className={styles.lastLineContainer}>
            <input className={`${styles.textInput} ${styles.tagInput}`} type="text" id={'note-tag'} name={'tagInput'} value={inputData.tagInput} onChange={handleChange}/>
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