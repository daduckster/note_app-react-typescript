import React, {useState} from 'react';
import Note from "./Note";
import styles from './YourNotes.module.scss'
import {InputEvent, NewNote} from "../../types/Notes";

interface PropTypes {
  notes: NewNote[]
  removeNote: (filteredNotes:NewNote[]) => void
  addNoteToEdit: (note:NewNote) => void
}

function YourNotes({notes, removeNote, addNoteToEdit}:PropTypes) {
  const [searchInputData, setSearchInputData] = useState<string>('')
  const [showBtn, setShowBtn] = useState<boolean>(false)
  const [fittingNotes, setFittingNotes] = useState<NewNote[]>([])

  function handleChange(e:InputEvent) {
    const value = e.target.value;
    setSearchInputData(value)

    if (value) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  function handleSearch(e:InputEvent) {
    e.preventDefault()

    const value = e.target.value

    const filteredNotes = notes.filter(note =>
      note.titleInput.toLowerCase().includes(value.toLowerCase()) ||
      note.noteInput.toLowerCase().includes(value.toLowerCase()) ||
      note.tagInput.toLowerCase().includes(value.toLowerCase())
    )

    setFittingNotes(filteredNotes)
  }

  return (
    <section id={'yourNotes'} className={styles.yourNotesContainer}>
      <header className={styles.yourNotesHeader}>
        <h2>YOUR NOTES</h2>
      </header>

      <div className={styles.notesContainer}>
        <div className={styles.searchContainer}>
          <input className={styles.searchbar} type="text" value={searchInputData} aria-label={'search by keyword'} placeholder={'Search by' +
            ' Keyword'} onChange={(e)=> {
            handleChange(e);
            handleSearch(e)
          } }/>

          {showBtn && (
            <button type={'button'} className={styles.showAllBtn}>Show All</button>
          )}

        </div>

        {fittingNotes && showBtn
          ?  fittingNotes.map(note => <Note key={note.id} note={note} notes={notes} removeNote={removeNote} addNoteToEdit={addNoteToEdit} />)
          : notes.map(note => <Note key={note.id} note={note} notes={notes} removeNote={removeNote} addNoteToEdit={addNoteToEdit} />)}
      </div>

    </section>
  );
}

export default YourNotes;