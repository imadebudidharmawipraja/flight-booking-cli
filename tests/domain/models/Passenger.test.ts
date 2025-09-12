import { Passenger } from '../../../src/domain/models/Passenger';

describe('Passenger Model', () => {
  describe('constructor', () => {
    it('should create a passenger with name', () => {
      const passenger = new Passenger('Budi');

      expect(passenger.name).toBe('Budi');
    });
  });
});
