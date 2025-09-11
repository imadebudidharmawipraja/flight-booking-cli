import { IFlightRepository } from "../interfaces";
import { Flight } from "../models/Flight";

/**
 * FlightRepository
 */
export class FlightRepository implements IFlightRepository {
  private flights: Map<string, Flight> = new Map();

  public create(flight: Flight): Flight {
    this.flights.set(flight.id, flight);
    return flight;
  }

  public findAll(): Flight[] {
    return Array.from(this.flights.values());
  }

  public findById(id: string): Flight | undefined {
    return this.flights.get(id);
  }
}
