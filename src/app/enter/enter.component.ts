import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent {
  @Input() noteName?: string;

  @Output() sendNoteName = new EventEmitter<string>();

  enterControl = new FormControl('');

  changeEnterWord(enterWord: string) {
    this.sendNoteName.emit(enterWord);
  }
}
