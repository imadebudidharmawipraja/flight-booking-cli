import { IBooking } from '../interfaces';
import { BookingStatus } from '../interfaces/IBooking';

/**
 * Booking Model.
 */
export class Booking implements IBooking {
  readonly id: string;
  passengerName: string;
  routeId: string;
  status: BookingStatus;
  flightDay: number;

  constructor(
    id: string,
    passengerName: string,
    routeId: string,
    status: BookingStatus,
    flightDay: number
  ) {
    this.id = id;
    this.passengerName = passengerName;
    this.routeId = routeId;
    this.status = status;
    this.flightDay = flightDay;
  }
}
