import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadStateFromStorage } from 'src/app/store/actions/actions';
import { LocalStorageHelperService } from 'src/app/list/services/local-storage-helper.service';
import { AppState } from 'src/app/store/reducers';
import { map } from 'rxjs/operators';
import { DbService } from 'src/app/list/services/db.service';

@Injectable({
  providedIn: 'root',
})
export class TodoSyncStorageService {
  isInit = false;

  constructor(
    public store: Store<AppState>,
    public localStorageHelper: LocalStorageHelperService,
    public dbService: DbService
  ) {}

  init() {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadFromLocalStorage();
    this.store
      .pipe(map((appState) => appState.appData.toDoData))
      .subscribe((state) => {
        this.localStorageHelper.setDataToLocalStorage(state);
      });
  }

  loadFromLocalStorage() {
    const storageState = this.localStorageHelper.getDataFromLocalStorage();
    if (storageState) {
      this.store.dispatch(new LoadStateFromStorage({ state: storageState }));
    } else {
      this.store.dispatch(
        new LoadStateFromStorage({
          state: this.dbService.data,
        })
      );
    }
  }
}
