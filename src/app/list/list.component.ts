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
    public dbService: DbService,
    public dataService: DataService,
    public localStorageHelperService: LocalStorageHelperService
  ) {
    this.data =
      localStorageHelperService.getDataFromLocalStorage() ?? dbService.data;
    this.newFilterTag = '';
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

  ngOnInit() {
    this.localStorageHelperService.setDataToLocalStorage(this.data);
  }

  deleteNote(id: number) {
    this.data = this.data.filter((elem) => elem.id !== id);
    this.localStorageHelperService.setDataToLocalStorage(this.data);
  }

  deleteTag(obj: DataForDeleteTag) {
    const updatedData = this.dataService.removeTag(
      this.data,
      obj.id,
      obj.tagIndex
    );
    this.data = updatedData;
    this.localStorageHelperService.setDataToLocalStorage(this.data);
  }

  appendTag(id: number) {
    const updatedData = this.dataService.addNewTag(this.data, id);
    this.data = updatedData;
    this.localStorageHelperService.setDataToLocalStorage(this.data);
  }

  changeTitle(data: DataForChangeTitle) {
    const updatedData = this.dataService.changeNoteName(
      this.data,
      data.id,
      data.title
    );
    this.data = updatedData;
    this.localStorageHelperService.setDataToLocalStorage(this.data);
  }

  changeTag(data: DataForChangeTag) {
    console.log(data);
    const updatedData = this.dataService.changeTagName(
      this.data,
      data.id,
      data.tag,
      data.tagIndex
    );
    this.data = updatedData;
    this.localStorageHelperService.setDataToLocalStorage(this.data);
  }
}
