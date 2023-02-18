import { Injectable } from '@angular/core';
import { DataItem } from '../../shared/interfaces/dataInterface';
import { DbService } from './db.service';
export const DATA_FIELD = 'dataItems';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageHelperService {
  constructor(public dbService: DbService) {}

  getDataFromLocalStorage(): DataItem[] {
    const savedData = localStorage.getItem(DATA_FIELD) as string;
    try {
      return JSON.parse(savedData);
    } catch {
      return this.dbService.data;
    }
  }
  setDataToLocalStorage(data: DataItem[]): void {
    const NewLocalStorageData = JSON.stringify(data);
    localStorage.setItem(DATA_FIELD, NewLocalStorageData);
  }
}
