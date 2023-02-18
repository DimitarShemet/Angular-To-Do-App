import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterControl = new FormControl('');
}
