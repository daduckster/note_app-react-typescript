import {NewNote} from "../../types/Notes";

export function scrollToNewNotesContainer() {
  const newNotesContainer = document.getElementById('newNotes')
  if(!newNotesContainer) return
  newNotesContainer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
}

export function filterNotes(notes:NewNote[], value:string) {
  return notes.filter(note =>
    note.titleInput.toLowerCase().includes(value.toLowerCase()) ||
    note.noteInput.toLowerCase().includes(value.toLowerCase()) ||
    note.tagInput.toLowerCase().includes(value.toLowerCase())
  )
}

// export function targetSearchbarValue() {
//   const searchbar = document.getElementById('searchbar')
//   if(!searchbar) return
//   return searchbar.textContent
// }