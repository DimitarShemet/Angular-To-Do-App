import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Tags } from '../shared/interfaces/tagsInterface';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';
import { DataForChangeTitle } from '../shared/interfaces/dataForChangeTitle';
import { DataForChangeTag } from '../shared/interfaces/dataForChangeTag';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() data?: DataItem[];
  @Input() tags?: Tags;
  @Input() title?: string;
  @Input() id?: number;

  @Output() addNewTag = new EventEmitter<number>();
  @Output() removeNote = new EventEmitter<number>();
  @Output() removeTag = new EventEmitter<DataForDeleteTag>();
  @Output() changeTitle = new EventEmitter<DataForChangeTitle>();
  @Output() changeTag = new EventEmitter<DataForChangeTag>();

  sendId(id: number) {
    this.removeNote.emit(id);
  }

  sendTag(obj: DataForDeleteTag) {
    this.removeTag.emit(obj);
  }

  addTag() {
    this.addNewTag.emit(this.id);
  }

  sendTitle(data: DataForChangeTitle) {
    this.changeTitle.emit(data);
  }

  changeTagValue(data: DataForChangeTag) {
    this.changeTag.emit(data);
  }
}
