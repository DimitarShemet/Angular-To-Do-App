import {
  Component,
  Input,
  OnChanges,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { DbService } from './services/db.service';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataService } from './services/data.service';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';
import { DataForChangeTitle } from '../shared/interfaces/dataForChangeTitle';
import { DataForChangeTag } from '../shared/interfaces/dataForChangeTag';
import { LocalStorageHelperService } from './services/local-storage-helper.service';
import { Store } from '@ngrx/store';
import { TodoSyncStorageService } from '../shared/services/todo-sync-storage.service';
import { AppState } from '../store/reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges, OnInit {
  @Input() newNoteName?: string;
  @Input() newFilterTag: string | null;
  @Output() clearFilterValue = new EventEmitter<string>();

  data: DataItem[];

  constructor(
    private store: Store<AppState>,
    public dbService: DbService,
    public dataService: DataService,
    public localStorageHelperService: LocalStorageHelperService,
    public SyncStorageService: TodoSyncStorageService
  ) {
    // this.newFilterTag = '';
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.SyncStorageService.init();
    this.store
      .pipe(map((AppState) => AppState.appData.toDoData))
      .subscribe((toDoState) => {
        console.log('data изменилась');
        this.data = toDoState;
      });
  }
  ngOnChanges() {
    if (this.newNoteName) {
      const updatedData = this.dataService.addNote(
        this.data,
        this.dataService.getNewId(this.data),
        this.newNoteName
      );
      this.data = updatedData;
      this.localStorageHelperService.setDataToLocalStorage(this.data);
    }

    if (this.newFilterTag) {
      this.data = this.data.filter((elem) =>
        elem.tags.includes(this.newFilterTag as string)
      );
      this.localStorageHelperService.setDataToLocalStorage(this.data);
      this.newFilterTag = '';
    }
  }
}
