import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Tags } from '../shared/interfaces/tagsInterface';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';
import { DataForChangeTitle } from '../shared/interfaces/dataForChangeTitle';
import { DataForChangeTag } from '../shared/interfaces/dataForChangeTag';
import { AddTag } from '../store/actions/actions';
import { Store } from '@ngrx/store';
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

  constructor(public store: Store) {}

  addTag() {
    this.store.dispatch(new AddTag({ id: this.id }));
  }
}
