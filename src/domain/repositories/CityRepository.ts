import { ICityRepository } from '../interfaces';
import { City } from '../models/City';

/**
 * CityRepository
 */
export class CityRepository implements ICityRepository {
  private cities: Map<string, City> = new Map();

  public create(city: City): City {
    this.cities.set(city.id, city);
    return city;
  }

  public findAll(): City[] {
    return Array.from(this.cities.values());
  }

  public findById(id: string): City | undefined {
    return this.cities.get(id);
  }

  public findByName(name: string): City | undefined {
    return Array.from(this.cities.values()).find(city => city.name === name);
  }

  public isExist(name: string): boolean {
    return this.cities.has(name);
  }
}
