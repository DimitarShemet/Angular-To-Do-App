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
  @Output() addTag = new EventEmitter<number>();
  @Output() sendTitle = new EventEmitter<DataForChangeTitle>();

  @ViewChild('input', { static: true }) inputRef?: ElementRef;
  form: FormGroup;
  stream$: Observable<any>;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, Validators.required],
    });

    this.form
      .get('title')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        console.log(value);
        if (this.title !== undefined && this.id !== undefined) {
          this.sendTitle.emit({ title: value, id: this.id });
        }
      });
  }

  removeNote() {
    this.sendId.emit(this.id);
  }

  changeTitle() {}

  addNewTag() {
    this.addTag.emit(this.id);
  }
}
