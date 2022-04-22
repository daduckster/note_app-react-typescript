import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import HeroMobile from "./components/HeroMobile/HeroMobile";
import YourNotes from "./components/YourNotes/YourNotes";
import Footer from "./components/Footer/Footer";
import NewNotes from "./components/NewNotes/NewNotes";
import {defaultNote, NewNote} from "./types/Notes";
import {scrollToNewNotesContainer} from "./components/YourNotes/yourNotesHelper";

function App() {
  const [notes, setNotes] = useState<NewNote[]>([])
  const [noteToEdit,setNoteToEdit] = useState<NewNote>({...defaultNote})
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    populateList()
  },[])

  function addNote(newNote:NewNote) {
    setNotes([newNote, ...notes])
  }

  function removeNote(filteredNotes:NewNote[]) {
    setNotes(filteredNotes)
  }

  function addNoteToEdit(note:NewNote) {
    setNoteToEdit({...note})
    setIsEditing(true)
    scrollToNewNotesContainer()
  }

  function stopEditing() {
    setIsEditing(false)
  }

  function populateList(){
    const res = localStorage.getItem('notes');
    if (!res) return;
    const notesInStorage = JSON.parse(res)
    setNotes([...notesInStorage])
  }

  return (
    <div>
      <Navbar />
      <HeroMobile />
      <NewNotes addNote={addNote} noteToEdit={noteToEdit} isEditing={isEditing} notes={notes} populateList={populateList} stopEditing={stopEditing}/>
      <YourNotes notes={notes} removeNote={removeNote} addNoteToEdit={addNoteToEdit} />
      <Footer />
    </div>
  );
}

export default App;
