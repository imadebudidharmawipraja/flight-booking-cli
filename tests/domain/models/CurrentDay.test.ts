import { CurrentDay } from '../../../src/domain/models/CurrentDay';

describe('CurrentDay Model', () => {
  describe('constructor', () => {
    it('should create a current day with day number', () => {
      const currentDay = new CurrentDay(3);

      expect(currentDay.currentDay).toBe(3);
    });

    it('should handle day 1', () => {
      const currentDay = new CurrentDay(1);

      expect(currentDay.currentDay).toBe(1);
    });
  });

  describe('day progression', () => {
    it('should allow advancing days', () => {
      const currentDay = new CurrentDay(2);

      currentDay.currentDay += 1;
      expect(currentDay.currentDay).toBe(3);
    });
  });
});
