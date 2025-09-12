import { Route } from '../../../src/domain/models/Route';

describe('Route Model', () => {
  describe('constructor', () => {
    it('should create a route with all properties', () => {
      const route = new Route('R001', 'JAK', 'DPS', 5, 'Garuda');

      expect(route.id).toBe('R001');
      expect(route.departureCity).toBe('JAK');
      expect(route.destinationCity).toBe('DPS');
      expect(route.scheduledDay).toBe(5);
      expect(route.flightId).toBe('Garuda');
    });
  });

  describe('route properties', () => {
    it('should handle different city combinations', () => {
      const route = new Route('R003', 'JAK', 'SBY', 1, 'FL003');

      expect(route.departureCity).toBe('JAK');
      expect(route.destinationCity).toBe('SBY');
    });
  });
});
