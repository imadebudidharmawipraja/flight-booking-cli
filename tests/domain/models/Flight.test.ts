import { Flight } from '../../../src/domain/models/Flight';

describe('Flight Model', () => {
  describe('constructor', () => {
    it('should create a flight with id and capacity', () => {
      const flight = new Flight('Merpati', 10);

      expect(flight.id).toBe('Merpati');
      expect(flight.capacity).toBe(10);
    });
  });
});
