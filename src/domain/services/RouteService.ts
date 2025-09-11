import { IRouteRepository, IRouteService } from "../interfaces";
import { Route } from "../models/Route";

export class RouteService implements IRouteService {
  private repository: IRouteRepository;

  constructor(repository: IRouteRepository) {
    this.repository = repository
  }

  public registerRoute(
    departureCity: string,
    destinationCity: string,
    scheduledDay: number,
    flightId: string
  ): string[] {
    const message = []

    this.repository.create(new Route(
      `${flightId}-${departureCity}-${destinationCity}-${scheduledDay}`,
      departureCity,
      destinationCity,
      scheduledDay,
      flightId
    ))

    message.push(`flight from ${departureCity} to ${destinationCity} has been scheduled on day ${scheduledDay}`)
    return message;
  }
}