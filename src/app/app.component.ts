import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  noteName = '';
  filterTag = '';
  changeNoteName(name: string) {
    this.noteName = name;
    console.log(this.noteName);
  }
  changeFilterTag(filterTag: string) {
    this.filterTag = filterTag;
  }
}
