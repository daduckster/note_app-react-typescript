import React, {useEffect, useState} from 'react';
import Note from "./Note";
import styles from './YourNotes.module.scss'
import {InputEvent, NewNote} from "../../types/Notes";
import {filterNotes} from "./yourNotesHelper";

interface PropTypes {
  notes: NewNote[]
  removeNote: (filteredNotes:NewNote[]) => void
  addNoteToEdit: (note:NewNote) => void
  toggleShowBtn: (boolean:boolean) => void
  showBtn:boolean
}

function YourNotes({notes, removeNote, addNoteToEdit, toggleShowBtn, showBtn}:PropTypes) {
  const [searchInputData, setSearchInputData] = useState<string>('')
  const [fittingNotes, setFittingNotes] = useState<NewNote[]>([])

  useEffect(()=>{if(!showBtn) {setSearchInputData('')}}, [showBtn])
  useEffect(()=>{
    if(searchInputData !== '') {
      const filteredNotes = filterNotes(notes, searchInputData)
      changeFittingNotes(filteredNotes)
    }
  }, [notes, searchInputData])

  function handleChange(e:InputEvent) {
    const value = e.target.value;
    setSearchInputData(value)

    if (value) {
      toggleShowBtn(true)
    } else {
      toggleShowBtn(false)
    }
  }

  function handleSearch(e:InputEvent) {
    e.preventDefault()
    const value = e.target.value
    const filteredNotes = filterNotes(notes, value)
    changeFittingNotes(filteredNotes)
  }

  function changeFittingNotes(filteredNotes:NewNote[]) {
    setFittingNotes(filteredNotes)
  }

  function showAllNotes() {
    toggleShowBtn(false)
    setSearchInputData('')
  }

  return (
    <section id={'yourNotes'} className={styles.yourNotesContainer}>
      <header className={styles.yourNotesHeader}>
        <h2>YOUR NOTES</h2>
      </header>

      <div className={styles.notesContainer}>
        <div className={styles.searchContainer}>
          <input id={'searchbar'} className={styles.searchbar} type="search" autoComplete={'off'} value={searchInputData}
                  aria-label={'search by keyword'} placeholder={'Search by Keyword'}
                  onChange={(e)=> {
            handleChange(e);
            handleSearch(e)
          } }/>

          {showBtn && (
            <button type={'button'} className={styles.showAllBtn} onClick={showAllNotes}>Show All</button>
          )}

        </div>

        {fittingNotes && showBtn
          ? fittingNotes.map(note => <Note key={note.id} note={note} notes={notes} removeNote={removeNote} addNoteToEdit={addNoteToEdit}/>)
          : notes.map(note => <Note key={note.id} note={note} notes={notes} removeNote={removeNote} addNoteToEdit={addNoteToEdit}/>)}
      </div>

    </section>
  );
}

export default YourNotes;