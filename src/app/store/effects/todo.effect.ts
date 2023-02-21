import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { LocalStorageHelperService } from 'src/app/list/services/local-storage-helper.service';
import { ToDoActionsTypes } from '../actions/actions';
import { AppState } from '../reducers';
import { toDoSelector } from '../reducers/reducer';
@Injectable()
export class ToDoEffects {
  constructor(
    private actions: Actions,
    public store: Store<AppState>,
    public storageService: LocalStorageHelperService
  ) {}
  updateStorage = createEffect(
    () =>
      this.actions.pipe(
        ofType(
          ToDoActionsTypes.deleteNote,
          ToDoActionsTypes.deleteTag,
          ToDoActionsTypes.addTag,
          ToDoActionsTypes.changeTitle,
          ToDoActionsTypes.changeTag,
          ToDoActionsTypes.addNote,
          ToDoActionsTypes.filterNotesByTag
        ),
        tap(() => {
          this.store.pipe(select(toDoSelector)).subscribe((toDoState) => {
            this.storageService.setDataToLocalStorage(toDoState);
          });
        })
      ),
    { dispatch: false }
  );
}
