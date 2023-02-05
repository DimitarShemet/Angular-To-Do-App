import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tags } from '../shared/interfaces/tagsInterface';
import { DataItem } from '../shared/interfaces/dataInterface';
@Component({
  selector: 'app-note-title',
  templateUrl: './note-title.component.html',
  styleUrls: ['./note-title.component.scss'],
})
export class NoteTitleComponent {
  @Input() data?: DataItem[];
  @Input() title?: string;
  @Input() tags?: Tags;
  @Input() id?: number;
  @Output() sendId = new EventEmitter<number>();
  @Output() addTag = new EventEmitter<number>();
  removeNote() {
    this.sendId.emit(this.id);
  }
  changeTitle() {
    console.log(this.title);
  }
  addNewTag() {
    this.addTag.emit(this.id);
  }
}
