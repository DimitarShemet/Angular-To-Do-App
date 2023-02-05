import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Tags } from '../shared/interfaces/tagsInterface';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';
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

  sendId(id: number) {
    this.removeNote.emit(id);
  }
  sendTag(obj: DataForDeleteTag) {
    this.removeTag.emit(obj);
  }
  addTag() {
    this.addNewTag.emit(this.id);
  }
}
