import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import HeroMobile from "./components/HeroMobile/HeroMobile";
import YourNotes from "./components/YourNotes/YourNotes";
import Footer from "./components/Footer/Footer";
import NewNotes from "./components/NewNotes/NewNotes";
import {NewNote} from "./types/Notes";

function App() {
  const [notes, setNotes] = useState<NewNote[]>([])

  function addNote(newNote:NewNote) {
    setNotes([newNote, ...notes])
  }

  function populateList(){
    const res = localStorage.getItem('notes');
    if (!res) return;
    const notesInStorage = JSON.parse(res)
    setNotes([...notesInStorage])
  }

  useEffect(() => {
    populateList()
  },[])
  return (
    <div>
      <Navbar />
      <HeroMobile />
      <NewNotes addNote={addNote} />
      <YourNotes notes={notes}/>
      <Footer />
    </div>
  );
}

export default App;
