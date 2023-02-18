import { toDoReducer } from './reducer';
import { ToDoState } from 'src/app/shared/interfaces/state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  appData: ToDoState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  appData: toDoReducer,
};
