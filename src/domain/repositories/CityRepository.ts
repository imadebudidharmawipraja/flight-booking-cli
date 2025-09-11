import { ICityRepository } from "../interfaces";
import { City } from "../models/City";

/**
 * CityRepository
 */
export class CityRepository implements ICityRepository {
  private cities: Map<string, City>;

  constructor(cities: Map<string, City>) {
    this.cities = cities || new Map<string, City>();
  }

  public create(city: City): City {
    this.cities.set(city.id, city);
    return city;
  }

  public findAll(): City[] {
    return Array.from(this.cities.values());;
  }

  public findById(id: string): City | undefined {
    return this.cities.get(id);
  }
}
