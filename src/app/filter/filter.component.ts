import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() filterTag?: string;

  @Output() sendFilterTag = new EventEmitter<string>();
  form = this.fb.group({
    filterControl: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {}

  changeFilterWord(filterWord: string) {
    this.filterTag = filterWord;
  }
  sendFilterWord() {
    this.sendFilterTag.emit(this.filterTag);
  }
}
