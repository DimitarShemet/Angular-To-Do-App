import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFilterComponent),
      multi: true,
    },
  ],
})
export class InputFilterComponent implements ControlValueAccessor {
  filterControl = new FormControl();
  onChange: any;
  onTouch: any;
  @Output() sendFilterWord = new EventEmitter();

  ngOnInit() {
    this.filterControl.valueChanges.subscribe((val) => {
      if (this.onChange) {
        this.onChange(val);
        console.log(val);
      }
    });
  }

  writeValue(value: string) {
    this.filterControl.setValue(value);
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }
  inputChange() {
    this.sendFilterWord.emit(this.filterControl.value);
  }
}
