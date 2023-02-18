import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddNote } from '../store/actions/actions';

@Component({
  selector: 'app-input-enter',
  templateUrl: './input-enter.component.html',
  styleUrls: ['./input-enter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputEnterComponent),
      multi: true,
    },
  ],
})
export class InputEnterComponent implements ControlValueAccessor {
  @Input() noteName?: string;

  enterControl = new FormControl('', Validators.required);
  onChange?: Function;
  onTouch?: Function;

  constructor(public store: Store) {}

  ngOnInit() {
    this.enterControl.valueChanges.subscribe((val) => {
      if (this.onChange) {
        this.onChange(val);
      }
    });
  }

  writeValue(value: string) {
    this.enterControl.setValue(value);
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  addNote() {
    this.store.dispatch(new AddNote({ name: this.enterControl.value }));
    this.enterControl.reset();
  }
}
