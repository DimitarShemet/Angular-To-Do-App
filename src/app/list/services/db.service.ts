import { Injectable } from '@angular/core';
import { DataItem } from '../../shared/interfaces/dataInterface';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  data: DataItem[] = [
    {
      id: 1,
      name: 'Пропылесосить',
      tags: ['#завтра', '#сегодня', '#уборка дома'],
    },
    {
      id: 2,
      name: 'Встретить друзей',
      tags: ['#вечеринка', '#свадьба'],
    },
    {
      id: 3,
      name: 'Доделать работу',
      tags: ['#IT', '#срочно', '#сегодня'],
    },
    {
      id: 4,
      name: 'День рождения',
      tags: ['#5 декабря', '#подарки', '#25 лет'],
    },
    {
      id: 5,
      name: 'Распорядок дня',
      tags: ['#погулять с собакой', '#ежедневно', '#купить корм'],
    },
    {
      id: 6,
      name: 'Работа',
      tags: ['#работа в IT', '#срочно', '#Angular'],
    },
  ];

  constructor() {}
}
