import { Action } from '@ngrx/store';
import { DataItem } from 'src/app/shared/interfaces/dataInterface';

export enum ToDoActionsTypes {
  Load = '[Todo] load Todo state',
  deleteNote = '[Todo] delete Note',
  deleteTag = '[Todo] delete Tag',
  addTag = '[Todo] add Tag',
  changeTitle = '[Todo] change Title',
  changeTag = '[Todo] change Tag',
  addNote = '[Todo] add Note',
  filterNotesByTag = '[Todo] filter Notes',
}

export class LoadStateFromStorage implements Action {
  readonly type = ToDoActionsTypes.Load;
  constructor(public payload: { state: DataItem[] }) {}
}
export class DeleteNote implements Action {
  readonly type = ToDoActionsTypes.deleteNote;
  constructor(public payload: { id: number }) {}
}

export class DeleteTag implements Action {
  readonly type = ToDoActionsTypes.deleteTag;
  constructor(public payload: { id: number; tagIndex: number }) {}
}

export class AddTag implements Action {
  readonly type = ToDoActionsTypes.addTag;
  constructor(public payload: { id: number }) {}
}

export class changeTitle implements Action {
  readonly type = ToDoActionsTypes.changeTitle;
  constructor(public payload: { id: number; title: string }) {}
}

export class changeTag implements Action {
  readonly type = ToDoActionsTypes.changeTag;
  constructor(public payload: { id: number; tag: string; tagIndex: number }) {}
}

export class AddNote implements Action {
  readonly type = ToDoActionsTypes.addNote;
  constructor(public payload: { name: string }) {}
}
export class filterNotesByTag implements Action {
  readonly type = ToDoActionsTypes.filterNotesByTag;
  constructor(public payload: { filterWord: string }) {}
}

export type ToDoActions =
  | LoadStateFromStorage
  | DeleteNote
  | DeleteTag
  | AddTag
  | changeTitle
  | changeTag
  | AddNote
  | filterNotesByTag;
