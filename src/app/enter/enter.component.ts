import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent {
  enterControl = new FormControl('');
}
