import { City } from '../../../src/domain/models/City';

describe('City Model', () => {
  describe('constructor', () => {
    it('should create a city with id and name', () => {
      const city = new City('JAK', 'Jakarta');

      expect(city.id).toBe('JAK');
      expect(city.name).toBe('Jakarta');
    });
  });
});
