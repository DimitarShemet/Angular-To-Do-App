import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { DataForChangeTag } from '../shared/interfaces/dataForChangeTag';
import { DataForDeleteTag } from '../shared/interfaces/dataForDeleteTag';
import { changeTag, DeleteTag } from '../store/actions/actions';

@Component({
  selector: 'app-note-tag',
  templateUrl: './note-tag.component.html',
  styleUrls: ['./note-tag.component.scss'],
})
export class NoteTagComponent {
  @Input() tag?: string;
  @Input() tagIndex?: number;
  @Input() id?: number;

  form: any;
  constructor(public store: Store) {}

  ngOnInit() {
    this.form = new FormGroup({
      tags: new FormArray([new FormControl(this.tag)]),
    });

    this.form
      .get('tags')
      .controls[0].valueChanges.pipe(debounceTime(700))
      .subscribe((value: string) => {
        this.store.dispatch(
          new changeTag({ id: this.id, tag: value, tagIndex: this.tagIndex })
        );
      });
  }

  removeTag() {
    this.store.dispatch(
      new DeleteTag({ id: this.id, tagIndex: this.tagIndex })
    );
  }
}
