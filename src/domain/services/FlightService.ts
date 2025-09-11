import { Flight } from "../models/Flight";
import { FlightRepository } from "../repositories/FlightRepository";


export class FlightService {
  private repository: FlightRepository;

  constructor(repository: FlightRepository) {
    this.repository = repository
  }

  public registerFlight(id: string, capacity: number): Flight {
    const flight = { id, capacity }
    this.repository.create(flight)
    return flight
  }
}