import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Tags } from '../shared/interfaces/tagsInterface';
import { DataItem } from '../shared/interfaces/dataInterface';
import { DataForChangeTitle } from '../shared/interfaces/dataForChangeTitle';
import { FormBuilder, Validators } from '@angular/forms';
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

  form: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, Validators.required],
    });
  }

  removeNote() {
    this.sendId.emit(this.id);
  }

  changeTitle() {
    this.title = this.form.get('title').value;
    if (this.title !== undefined && this.id !== undefined) {
      this.sendTitle.emit({ title: this.title, id: this.id });
    }
  }

  addNewTag() {
    this.addTag.emit(this.id);
  }
}
