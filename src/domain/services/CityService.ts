import { arrayToString } from "../../utils/utils";
import { ICityRepository, ICityService } from "../interfaces";
import { City } from "../models/City";

export class CityService implements ICityService {
  private repository: ICityRepository;

  constructor(repository: ICityRepository) {
    this.repository = repository
  }

  public registerCity(id: string, name: string): string[] {
    const message = []

    this.repository.create(new City(id, name))

    message.push(`${name} has been created as destination and origin city with city id of ${id}`)
    return message;
  }

  public getCities(): string[] {
    const message = []
    const cities = this.repository.findAll();

    message.push(`available city as departure and destination are: ${arrayToString(cities, 'name')}`);
    return message;
  }

  public isCityExist(name: string): boolean {
    return this.repository.isExist(name);
  }
}