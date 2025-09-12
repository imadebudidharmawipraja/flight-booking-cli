import { Flight } from '../models/Flight';
import { Route } from '../models/Route';

export interface IRouteService {
  registerRoute(
    departureCity: string,
    destinationCity: string,
    scheduledDay: number,
    flightId: string
  ): string[];
  getAvailableFlightByDay(day: number): Flight[];
  getAvailableBookFlight(
    departure: string,
    destination: string,
    currentDay: number
  ): { availableRoute: Route[]; message: string[] };
}
