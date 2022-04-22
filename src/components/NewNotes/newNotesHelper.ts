
import {updateLocalStorage} from "../../api/storageHandler";

interface InputData {
  titleInput: string
  noteInput: string
  tagInput: string
}

export function createNote(inputData:InputData){
  const newNote = {
    titleInput: inputData.titleInput,
    noteInput: inputData.noteInput,
    tagInput: inputData.tagInput,
    id: `${createID()}`
  }

  updateLocalStorage(newNote);

  return newNote;
}

export function scrollToYourNotesContainer() {
  const yourNotesContainer = document.getElementById('yourNotes')
  if(!yourNotesContainer) return
  yourNotesContainer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
}

export function scrollToNote(id:string) {
  const desiredNote = document.getElementById(`${id}`)
  if (!desiredNote) return
  desiredNote.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
}

function createID() {
  return Math.floor(Math.random() * 1000000000000000000000);
}