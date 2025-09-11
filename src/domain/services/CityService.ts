import { ICityService } from "../interfaces";
import { CityRepository } from "../repositories/CityRepository";

export class CityService implements ICityService {
  private repository: CityRepository;

  constructor(repository: CityRepository) {
    this.repository = repository
  }

  public registerCity(id: string, name: string): string[] {
    const message = []

    this.repository.create({ id, name })

    message.push(`${name} has been created as destination and origin city with city id of ${id}`)
    return message;
  }
}