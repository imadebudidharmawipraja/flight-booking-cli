import { IRouteService } from "../interfaces";
import { RouteRepository } from "../repositories/RouteRepository";

export class RouteService implements IRouteService {
  private repository: RouteRepository;

  constructor(repository: RouteRepository) {
    this.repository = repository
  }

  public registerRoute(
    departureCity: string,
    destinationCity: string,
    scheduledDay: number,
    flightId: string
  ): string[] {
    const message = []

    this.repository.create({
      id: `${flightId}-${departureCity}-${destinationCity}-${scheduledDay}`,
      departureCity,
      destinationCity,
      scheduledDay,
      flightId
    })

    message.push(`flight from ${departureCity} to ${destinationCity} has been scheduled on day ${scheduledDay}`)
    return message;
  }
}