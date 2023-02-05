import { Component, Input, OnChanges } from '@angular/core';
import { DbService } from './services/db.service';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataService } from './services/data.service';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {
  @Input() newNoteName?: string;
  @Input() newFilterTag: string;

  data: DataItem[];

  constructor(public dbService: DbService, public dataService: DataService) {
    this.data = dbService.data;
    this.newFilterTag = '';
  }

  ngOnChanges() {
    if (this.newNoteName) {
      this.dataService.addNote(
        this.data,
        this.dataService.getNewId(this.data),
        this.newNoteName
      );
    }
    console.log(this.newFilterTag);

    if (this.newFilterTag) {
      this.data = this.data.filter((elem) =>
        elem.tags.includes(this.newFilterTag)
      );
    }
  }

  deleteNote(id: number) {
    this.data = this.data.filter((elem) => elem.id !== id);
  }

  deleteTag(obj: DataForDeleteTag) {
    const updatedData = this.dataService.removeTag(
      this.data,
      obj.id,
      obj.tagIndex
    );
    this.data = updatedData;
    console.log(this.data);
  }

  appendTag(id: number) {
    const updatedData = this.dataService.addNewTag(this.data, id);
    this.data = updatedData;
  }
}
