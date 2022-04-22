import {NewNote} from "../types/Notes";

export function updateLocalStorage(newNote:NewNote) {
  let notesInStorage = [];
  const res = localStorage.getItem('notes');
  if (res) {
    notesInStorage = JSON.parse(res);
  }

  const updatedNotes = [newNote, ...notesInStorage];
  localStorage.setItem('notes', JSON.stringify(updatedNotes));
}