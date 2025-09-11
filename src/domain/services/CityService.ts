import { City } from "../models/City";
import { CityRepository } from "../repositories/CityRepository";

export class CityService {
  private repository: CityRepository;

  constructor(repository: CityRepository) {
    this.repository = repository
  }

  public registerCity(id: string, name: string): City {
    const city = { id, name }
    this.repository.create(city)
    return city
  }
}