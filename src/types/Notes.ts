import React from "react";

export type InputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
export type SubmitEvent = React.FormEvent<HTMLFormElement> & React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>;
export type BtnEvent = React.MouseEvent<HTMLButtonElement>;

export interface NewNote {
  titleInput: string
  noteInput: string
  tagInput: string
  id: string
}

export const defaultNote: NewNote = {
  titleInput: '',
  noteInput: '',
  tagInput: '',
  id: ''
}