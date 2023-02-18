import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Tags } from '../shared/interfaces/tagsInterface';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataForChangeTitle } from '../shared/interfaces/dataForChangeTitle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, delay, fromEvent, Observable, map } from 'rxjs';
import { DeleteNote, AddTag, changeTitle } from '../store/actions/actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-note-title',
  templateUrl: './note-title.component.html',
  styleUrls: ['./note-title.component.scss'],
})
export class NoteTitleComponent implements OnInit {
  @Input() data?: DataItem[];
  @Input() title?: string;
  @Input() tags?: Tags;
  @Input() id?: number;

  @Output() sendId = new EventEmitter<number>();

  @ViewChild('input', { static: true }) inputRef?: ElementRef;
  form: FormGroup;
  stream$: Observable<any>;

  constructor(public fb: FormBuilder, public store: Store) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, Validators.required],
    });

    this.form
      .get('title')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        this.store.dispatch(new changeTitle({ id: this.id, title: value }));
      });
  }

  removeNote() {
    this.store.dispatch(new DeleteNote({ id: this.id }));
  }

  addNewTag() {
    this.store.dispatch(new AddTag({ id: this.id }));
  }
}
