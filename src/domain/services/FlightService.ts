import { IFlightService } from "../interfaces";
import { Flight } from "../models/Flight";
import { FlightRepository } from "../repositories/FlightRepository";


export class FlightService implements IFlightService {
  private repository: FlightRepository;

  constructor(repository: FlightRepository) {
    this.repository = repository
  }

  public registerFlight(id: string, capacity: number): string[] {
    const message = []

    this.repository.create({ id, capacity })

    message.push(`Flight ${id} has been created with capacity at ${capacity}`)
    return message;
  }
}