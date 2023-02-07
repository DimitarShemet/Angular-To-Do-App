import {
  Component,
  EventEmitter,
  forwardRef,
  Output,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
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
  @Output() sendFilterWord = new EventEmitter();

  filterControl = new FormControl('', Validators.required);
  onChange?: Function;
  onTouch?: Function;

  ngOnInit() {
    this.filterControl.valueChanges.subscribe((val) => {
      if (this.onChange) {
        this.onChange(val);
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
    this.filterControl.reset();
  }
}
