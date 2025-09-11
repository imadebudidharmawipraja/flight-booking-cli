export interface ICurrentDayService {
    getCurrentDay(): number;
    setCurrentDay(day: number): number;
    advanceToNextDay(): number;
}
