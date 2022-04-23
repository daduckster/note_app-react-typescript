import React, {useEffect, useState} from 'react';
import styles from './NewNotes.module.scss'
import {defaultNote, InputEvent, NewNote, SubmitEvent} from '../../types/Notes'
import {createNote, replaceNote, scrollToNote, scrollToYourNotesContainer} from "./newNotesHelper";

interface PropTypes {
  addNote: (newNote:NewNote) => void
  noteToEdit: NewNote
  isEditing: boolean
  notes: NewNote[]
  populateList: () => void
  stopEditing: () => void
  toggleShowBtn: (boolean:boolean) => void
}

function NewNotes({addNote, noteToEdit, isEditing, notes, populateList, stopEditing, toggleShowBtn}:PropTypes) {
  const [inputData, setInputData] = useState<NewNote>({...defaultNote})

  useEffect(() => {
    setInputData({...noteToEdit})
  }, [noteToEdit])

  function handleChange(e:InputEvent) {
    const {name, value} = e.target;
    setInputData({...inputData, [name]: value})
  }

  function handleSubmit(e:SubmitEvent){
    e.preventDefault();

    if (!isEditing) {
      toggleShowBtn(false)
      const newNote = createNote(inputData);
      setInputData({...defaultNote})
      addNote(newNote)
      scrollToYourNotesContainer()
    } else {
      toggleShowBtn(false)
      const noteToReplace = notes.find(note => note.id === inputData.id)
      if (!noteToReplace) return;
      replaceNote(noteToReplace, inputData)
      localStorage.setItem('notes', JSON.stringify(notes));
      setInputData({...defaultNote})
      stopEditing()
      populateList()
      scrollToNote(noteToReplace.id)
    }


  }

  return (
    <section id={'newNotes'} className={styles.newNotesContainer}>
      <header className={styles.newNotesHeader}>
        <h1>LET'S NOTE</h1>
      </header>

      <form className={styles.newNotesForm} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="note-title">Title (optional):</label>
          <input className={styles.textInput} type="text" autoComplete={'off'} id={'note-title'} name={'titleInput'}
                  value={inputData.titleInput} onChange={(e) => handleChange(e)}/>
        </div>

        <div>
          <label className={styles.label} htmlFor="note-text">Type your note:</label>
          <textarea className={styles.textarea} autoComplete={'off'} id={'note-text'} name={'noteInput'} value={inputData.noteInput}
                    onChange={(e)=>handleChange(e)} required={true}/>
        </div>

        <div>
          <label className={styles.label} htmlFor="note-tag">Tag (optional):</label>
          <div className={styles.lastLineContainer}>
            <input className={`${styles.textInput} ${styles.tagInput}`} type="text" autoComplete={'off'} id={'note-tag'} name={'tagInput'}
                    value={inputData.tagInput} onChange={(e)=>handleChange(e)}/>
            {isEditing
            ? <input className={styles.submitBtn} type="submit" value={"SAVE CHANGES"}/>
            : <input className={styles.submitBtn} type="submit" value={"CREATE NOTE"}/>
            }

          </div>
        </div>

        <object className={styles.animationSvg} aria-label="Animation of a solar system with a can instead of sun" type="image/svg+xml"
                data={"assets/animations/Animated.svg"}/>
      </form>
    </section>
  );
}

export default NewNotes;