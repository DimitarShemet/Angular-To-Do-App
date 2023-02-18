import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { filterNotesByTag } from '../store/actions/actions';
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

  constructor(public store: Store) {}

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
  filterNotes() {
    this.store.dispatch(
      new filterNotesByTag({ filterWord: this.filterControl.value })
    );
    this.filterControl.reset();
  }
}
