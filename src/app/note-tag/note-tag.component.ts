import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';

@Component({
  selector: 'app-note-tag',
  templateUrl: './note-tag.component.html',
  styleUrls: ['./note-tag.component.scss'],
})
export class NoteTagComponent {
  @Input() tag?: string;
  @Input() tagIndex?: number;
  @Input() id?: number;

  @Output() sendTag = new EventEmitter<DataForDeleteTag>();

  changeTag() {
    console.log(this.tag);
  }

  removeTag() {
    if (this.tagIndex !== undefined && this.id !== undefined)
      this.sendTag.emit({ tagIndex: this.tagIndex, id: this.id });
  }
}
