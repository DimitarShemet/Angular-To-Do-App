import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() filterTag?: string | null;

  @Output() sendFilterTag = new EventEmitter<string | null>();

  filterControl = new FormControl('');
  constructor(public fb: FormBuilder) {}

  sendFilterWord(word: string) {
    this.sendFilterTag.emit(word);
  }
}
