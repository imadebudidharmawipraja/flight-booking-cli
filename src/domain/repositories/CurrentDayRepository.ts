import { ICurrentDay, ICurrentDayRepository } from '../interfaces';
import { CurrentDay } from '../models/CurrentDay';

export class CurrentDayRepository implements ICurrentDayRepository {
  private day: ICurrentDay;

  constructor() {
    this.day = new CurrentDay(1); // Initialize with day 1 as default
  }

  setCurrentDay(day: number): number {
    this.day.currentDay = day;
    return this.day.currentDay;
  }

  getCurrentDay(): number {
    if (!this.day.currentDay) {
      this.setCurrentDay(1);
    }

    return this.day.currentDay;
  }

  advanceToNextDay(): number {
    const currentDay = this.getCurrentDay();
    const nextDay = currentDay + 1;

    this.setCurrentDay(nextDay);
    return nextDay;
  }
}
