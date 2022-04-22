import React from "react";

export type InputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
export type SubmitEvent = React.FormEvent<HTMLFormElement> & React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>;

export interface NewNote {
  titleInput: string
  noteInput: string
  tagInput: string
  id: string
}