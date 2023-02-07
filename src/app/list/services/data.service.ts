import { Injectable } from '@angular/core';
import { DataItem } from 'src/app/shared/interfaces/dataInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  addNote(data: DataItem[], id: number, name: string) {
    data.push({
      id,
      name,
      tags: [],
    });
    return data;
  }

  getNewId(data: DataItem[]): number {
    return (
      data.reduce((maxId, note) => {
        const currId = note.id;
        return currId > maxId ? currId : maxId;
      }, 0) + 1
    );
  }

  getNoteIndexById(data: DataItem[], id: number): number {
    return data.findIndex((elem) => elem.id === id);
  }

  removeTag(data: DataItem[], id: number, index: number): DataItem[] {
    const noteIndex = this.getNoteIndexById(data, id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.tags.splice(index, 1);
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      return updatedData;
    }
    return data;
  }

  addNewTag(data: DataItem[], id: number, value?: string): DataItem[] {
    const noteIndex = this.getNoteIndexById(data, id);
    if (noteIndex !== -1) {
      const updatedData = [...data];
      if (value) {
        updatedData[noteIndex].tags.push(`#${value}`);
      } else {
        updatedData[noteIndex].tags.push('#');
      }
      return updatedData;
    }
    return data;
  }
  changeNoteName(data: DataItem[], id: number, value: string): DataItem[] {
    const noteIndex = this.getNoteIndexById(data, id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.name = value;
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      return updatedData;
    }
    return data;
  }

  changeTagName(
    data: DataItem[],
    id: number,
    value: string,
    index: number
  ): DataItem[] {
    const noteIndex = this.getNoteIndexById(data, id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.tags[index] = value;
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      return updatedData;
    }
    return data;
  }
}
