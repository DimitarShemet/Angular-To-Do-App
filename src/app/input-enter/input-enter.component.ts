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

  @Output() sendEnterWord = new EventEmitter();

  enterControl = new FormControl('', Validators.required);
  onChange?: Function;
  onTouch?: Function;

  constructor() {}

  ngOnInit() {
    this.enterControl.valueChanges.subscribe((val) => {
      if (this.onChange) {
        this.onChange(val);
        console.log(val);
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

  inputChange() {
    this.sendEnterWord.emit(this.enterControl.value);
    this.enterControl.reset();
  }
}
