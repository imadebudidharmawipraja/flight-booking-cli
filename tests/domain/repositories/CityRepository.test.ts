import { City } from '../../../src/domain/models/City';
import { CityRepository } from '../../../src/domain/repositories/CityRepository';

describe('CityRepository', () => {
  let cityRepository: CityRepository;

  beforeEach(() => {
    cityRepository = new CityRepository();
  });

  describe('create', () => {
    it('should create and store a city', () => {
      const city = new City('JAK', 'Jakarta');

      const result = cityRepository.create(city);

      expect(result).toBe(city);
      expect(cityRepository.findById('JAK')).toBe(city);
    });
  });

  describe('findAll', () => {
    it('should return empty array when no cities exist', () => {
      const cities = cityRepository.findAll();

      expect(cities).toEqual([]);
    });

    it('should return all cities', () => {
      const city1 = new City('JAK', 'Jakarta');
      const city2 = new City('DPS', 'Denpasar');

      cityRepository.create(city1);
      cityRepository.create(city2);

      const cities = cityRepository.findAll();

      expect(cities).toHaveLength(2);
      expect(cities).toContain(city1);
      expect(cities).toContain(city2);
    });
  });

  describe('findById', () => {
    it('should return city when found', () => {
      const city = new City('DPS', 'Denpasar');
      cityRepository.create(city);

      const result = cityRepository.findById('DPS');

      expect(result).toBe(city);
    });

    it('should return undefined when not found', () => {
      const result = cityRepository.findById('UNKNOWN');

      expect(result).toBeUndefined();
    });
  });

  describe('findByName', () => {
    it('should return city when found by name', () => {
      const city = new City('JAK', 'Jakarta');
      cityRepository.create(city);

      const result = cityRepository.findByName('Jakarta');

      expect(result).toBe(city);
    });

    it('should return undefined when not found by name', () => {
      const result = cityRepository.findByName('Unknown City');

      expect(result).toBeUndefined();
    });
  });

  describe('isExist', () => {
    beforeEach(() => {
      const city = new City('SBY', 'Surabaya');
      cityRepository.create(city);
    });

    it('should return false when city name does not exist', () => {
      const result = cityRepository.isExist('NonExistent');

      expect(result).toBe(false);
    });
  });
});
