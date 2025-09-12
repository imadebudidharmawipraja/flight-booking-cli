import { ICurrentDay } from '../interfaces';

export class CurrentDay implements ICurrentDay {
  currentDay: number;

  constructor(currentDay: number) {
    this.currentDay = currentDay;
  }
}
