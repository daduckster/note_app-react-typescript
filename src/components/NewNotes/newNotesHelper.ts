
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

function createID() {
  return Math.floor(Math.random() * 1000000000000000000000);
}