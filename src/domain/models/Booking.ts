import { IBooking } from "../interfaces";

/**
 * Booking Model.
 */
export class Booking implements IBooking {
  readonly id: string;
  passengerName: string;
  routeId: string;

  constructor(id: string, passengerName: string, routeId: string) {
    this.id = id;
    this.passengerName = passengerName;
    this.routeId = routeId;
  }
}

