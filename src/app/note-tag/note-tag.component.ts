import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DataForChangeTag } from '../shared/interfaces/dataForChangeTag';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';

@Component({
  selector: 'app-note-tag',
  templateUrl: './note-tag.component.html',
  styleUrls: ['./note-tag.component.scss'],
})
export class NoteTagComponent {
  @Input() tag?: string;
  @Input() tagIndex?: number;
  @Input() id?: number;

  @Output() sendTag = new EventEmitter<DataForDeleteTag>();
  @Output() changeTagValue = new EventEmitter<DataForChangeTag>();

  form: any;

  ngOnInit() {
    this.form = new FormGroup({
      tags: new FormArray([new FormControl(this.tag)]),
    });

    this.form
      .get('tags')
      .controls[0].valueChanges.pipe(debounceTime(500))
      .subscribe((value: string) => {
        console.log(value);
        if (
          this.tagIndex !== undefined &&
          this.tag !== undefined &&
          this.id !== undefined
        )
          this.changeTagValue.emit({
            id: this.id,
            tag: value,
            tagIndex: this.tagIndex,
          });
      });
  }

  removeTag() {
    if (this.tagIndex !== undefined && this.id !== undefined)
      this.sendTag.emit({ tagIndex: this.tagIndex, id: this.id });
  }
}
