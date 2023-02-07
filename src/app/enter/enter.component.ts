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

  constructor(public fb: FormBuilder) {}

  form = this.fb.group({
    enter: ['', Validators.required],
  });

  changeEnterWord(enterWord: string) {
    this.sendNoteName.emit(enterWord);
  }
}
