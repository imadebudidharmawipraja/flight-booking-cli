import { IFlightRepository, IFlightService } from "../interfaces";
import { Flight } from "../models/Flight";


export class FlightService implements IFlightService {
  private repository: IFlightRepository;

  constructor(repository: IFlightRepository) {
    this.repository = repository
  }

  public registerFlight(id: string, capacity: number): string[] {
    const message = []

    this.repository.create(new Flight(id, capacity))

    message.push(`Flight ${id} has been created with capacity at ${capacity}`)
    return message;
  }
}