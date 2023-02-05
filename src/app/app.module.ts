import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnterComponent } from './enter/enter.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { NoteComponent } from './note/note.component';
import { NoteTitleComponent } from './note-title/note-title.component';
import { NoteTagComponent } from './note-tag/note-tag.component';
import { IfElseDirective } from './note-title/directives/if-else.directive';
import { RedColorDirective } from './shared/directives/red-color.directive';
import { InputEnterComponent } from './input-enter/input-enter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFilterComponent } from './input-filter/input-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    FilterComponent,
    ListComponent,
    NoteComponent,
    NoteTitleComponent,
    NoteTagComponent,
    IfElseDirective,
    RedColorDirective,
    InputEnterComponent,
    InputFilterComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
