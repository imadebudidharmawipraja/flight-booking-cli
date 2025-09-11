import { IRoute } from '../interfaces';

export class Route implements IRoute {
  readonly id: string;
  readonly destinationCity: string;
  readonly departureCity: string;
  readonly scheduledDay: number;
  readonly flightId: string;

  constructor(
    id: string,
    destinationCity: string,
    departureCity: string,
    scheduledDay: number,
    flightId: string
  ) {
    this.id = id;
    this.destinationCity = destinationCity;
    this.departureCity = departureCity;
    this.scheduledDay = scheduledDay;
    this.flightId = flightId;
  }
}
