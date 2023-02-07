import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';
import { DataItem } from 'src/app/shared/interfaces/dataInterface';

@Pipe({
  name: 'filterNotes',
})
export class FilterNotesPipe implements PipeTransform {
  transform(notes: DataItem[], filterWord: string | null): DataItem[] {
    if (filterWord) {
      const updatedData = notes.filter((elem) =>
        elem.tags.includes(filterWord as string)
      );
      console.log(filterWord);
      return updatedData;
    }
    return notes;
  }
}
