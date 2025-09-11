import { IFlightRepository, IRouteRepository, IRouteService } from "../interfaces";
import { Flight } from "../models/Flight";
import { Route } from "../models/Route";

export class RouteService implements IRouteService {
  private repository: IRouteRepository;
  private flightRepository: IFlightRepository;

  constructor(repository: IRouteRepository, flightRepository: IFlightRepository) {
    this.repository = repository
    this.flightRepository = flightRepository
  }

  public registerRoute(
    departureCity: string,
    destinationCity: string,
    scheduledDay: number,
    flightId: string
  ): string[] {
    const message = []
    const routeId = `${flightId}-${departureCity}-${destinationCity}-${scheduledDay}`;

    this.repository.create(new Route(
      flightId,
      departureCity,
      destinationCity,
      scheduledDay,
      flightId
    ))

    message.push(
      `flight ${routeId}-${departureCity}-${destinationCity}-${scheduledDay} from ${departureCity} to ${destinationCity} has been scheduled on day ${scheduledDay} of the week`
    )
    return message;
  }

  public getAvailableFlightByDay(day: number): Flight[] {
    const message = [];
    const flights = this.flightRepository.findAll();
    const unavailableFlight = this.repository.findByScheduledDay(day);

    const takenFlightIds = new Set(unavailableFlight.map(route => route.flightId));
    return flights.filter(flight => !takenFlightIds.has(flight.id));
  }
}