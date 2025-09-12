import {
  IBookingRepository,
  IFlightRepository,
  IRouteRepository,
  IRouteService,
} from '../interfaces';
import { Flight } from '../models/Flight';
import { Route } from '../models/Route';

export class RouteService implements IRouteService {
  private repository: IRouteRepository;
  private flightRepository: IFlightRepository;
  private bookingRepository: IBookingRepository;

  constructor(
    repository: IRouteRepository,
    flightRepository: IFlightRepository,
    bookingRepository: IBookingRepository
  ) {
    this.repository = repository;
    this.flightRepository = flightRepository;
    this.bookingRepository = bookingRepository;
  }

  public registerRoute(
    departureCity: string,
    destinationCity: string,
    scheduledDay: number,
    flightId: string
  ): string[] {
    const message = [];
    const routeId = `${flightId}-${departureCity}-${destinationCity}-${scheduledDay}`;

    this.repository.create(
      new Route(routeId, departureCity, destinationCity, scheduledDay, flightId)
    );

    message.push(
      `Flight route from ${departureCity} to ${destinationCity} has been scheduled on day ${scheduledDay}`
    );
    return message;
  }

  public getAvailableFlightByDay(day: number): Flight[] {
    const flights = this.flightRepository.findAll();
    const unavailableFlight = this.repository.findByScheduledDay(day);

    const takenFlightIds = new Set(
      unavailableFlight.map(route => route.flightId)
    );
    return flights.filter(flight => !takenFlightIds.has(flight.id));
  }

  private getAvailableSeat(routeId: string, flightId: string): number {
    const bookCount = this.bookingRepository.findByRoute(routeId).length;
    const flightCapacity =
      this.flightRepository.findById(flightId)?.capacity || 0;

    return flightCapacity - bookCount;
  }

  private findTransitRoutes(
    initialDeparture: string,
    finalDestination: string,
    currentDay: number
  ): { availableRoute: Route[]; message: string[] } {
    const message: string[] = [];
    const availableRoute: Route[] = [];
    const routes = this.repository
      .findAll()
      .filter((route: Route) => route.scheduledDay > currentDay);

    routes.find(firstFlight => {
      const firstFlightAvailableSeat = this.getAvailableSeat(
        firstFlight.id,
        firstFlight.flightId
      );

      if (
        firstFlight.departureCity === initialDeparture &&
        firstFlightAvailableSeat > 0
      ) {
        routes.find(secondFlight => {
          const secondFlightAvailableSeat = this.getAvailableSeat(
            secondFlight.id,
            secondFlight.flightId
          );

          if (
            secondFlight.departureCity === firstFlight.destinationCity &&
            secondFlight.destinationCity === finalDestination &&
            secondFlight.scheduledDay == firstFlight.scheduledDay &&
            secondFlightAvailableSeat > 0
          ) {
            message.push(`transit flight found:`);
            message.push(
              `flight from ${firstFlight.departureCity} - ${firstFlight.destinationCity} - ${secondFlight.destinationCity}  on day ${firstFlight.scheduledDay}`
            );
            message.push(
              `first flight available seat: ${firstFlightAvailableSeat}`
            );
            message.push(
              `second flight available seat: ${secondFlightAvailableSeat}`
            );
            availableRoute.push(firstFlight);
            availableRoute.push(secondFlight);
            return true;
          }
        });
      } else {
        message.push('no flight is available for that route');
      }
    });
    return { availableRoute, message };
  }

  public getAvailableBookFlight(
    departure: string,
    destination: string,
    currentDay: number
  ): { availableRoute: Route[]; message: string[] } {
    const message: string[] = [];
    const availableRoute = this.repository.findByCities(departure, destination);
    const availableByDay = availableRoute.filter(
      (route: Route) => route.scheduledDay > currentDay
    );
    const directFlight = availableByDay.find((route: Route) => {
      const availableSeat = this.getAvailableSeat(route.id, route.flightId);
      if (availableSeat > 0) {
        message.push(
          `flight found: ${departure} - ${destination} on day ${route.scheduledDay}`
        );
        message.push(`flight available seat: ${availableSeat}`);
        return true;
      }
      return false;
    });
    if (!directFlight) {
      return this.findTransitRoutes(departure, destination, currentDay);
    }
    return { availableRoute: [directFlight], message };
  }

  public getRouteById(routeId: string): Route | null {
    return this.repository.findById(routeId);
  }
}
