import { Flight } from '../../../src/domain/models/Flight';
import { FlightRepository } from '../../../src/domain/repositories/FlightRepository';

describe('FlightRepository', () => {
  let flightRepository: FlightRepository;

  beforeEach(() => {
    flightRepository = new FlightRepository();
  });

  describe('create', () => {
    it('should create and store a flight', () => {
      const flight = new Flight('FL001', 100);

      const result = flightRepository.create(flight);

      expect(result).toBe(flight);
      expect(flightRepository.findById('FL001')).toBe(flight);
    });
  });

  describe('findAll', () => {
    it('should return empty array when no flights exist', () => {
      const flights = flightRepository.findAll();

      expect(flights).toEqual([]);
    });

    it('should return all flights', () => {
      const flight1 = new Flight('FL001', 100);
      const flight2 = new Flight('FL002', 150);

      flightRepository.create(flight1);
      flightRepository.create(flight2);

      const flights = flightRepository.findAll();

      expect(flights).toHaveLength(2);
      expect(flights).toContain(flight1);
      expect(flights).toContain(flight2);
    });
  });

  describe('findById', () => {
    it('should return flight when found', () => {
      const flight = new Flight('FL003', 200);
      flightRepository.create(flight);

      const result = flightRepository.findById('FL003');

      expect(result).toBe(flight);
    });

    it('should return undefined when not found', () => {
      const result = flightRepository.findById('FL999');

      expect(result).toBeUndefined();
    });
  });
});
