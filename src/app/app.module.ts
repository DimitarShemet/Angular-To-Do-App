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
import { FilterNotesPipe } from './list/pipes/filter-notes.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './store/effects/todo.effect';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    FilterNotesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([ToDoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
