import { IRoute } from '../interfaces';

export class Route implements IRoute {
  readonly id: string;
  readonly destinationCity: string;
  readonly departureCity: string;
  readonly scheduledDay: number;
  readonly flightId: string;

  constructor(
    id: string,
    departureCity: string,
    destinationCity: string,
    scheduledDay: number,
    flightId: string
  ) {
    this.id = id;
    this.departureCity = departureCity;
    this.destinationCity = destinationCity;
    this.scheduledDay = scheduledDay;
    this.flightId = flightId;
  }
}
