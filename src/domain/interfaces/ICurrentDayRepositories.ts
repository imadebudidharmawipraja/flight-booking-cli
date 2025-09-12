export interface ICurrentDayRepository {
  setCurrentDay(day: number): number;
  getCurrentDay(): number;
  advanceToNextDay(): number;
}
