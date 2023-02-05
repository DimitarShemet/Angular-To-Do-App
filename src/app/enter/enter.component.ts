import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent {
  @Input() noteName?: string;

  @Output() sendNoteName = new EventEmitter<string>();
  formReview = this.fb.group({
    enter: ['', Validators.required],
  });
  changeEnterWord(enterWord: string) {
    this.noteName = enterWord;
  }

  addNote() {
    this.sendNoteName.emit(this.noteName);
  }
  constructor(public fb: FormBuilder) {}
}
