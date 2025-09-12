export type BookingStatus = 'ARRIVED' | 'DEPARTED' | 'BOOKED';

export interface IBooking {
  readonly id: string;
  passengerName: string;
  routeId: string;
  status: BookingStatus;
  flightDay: number;
  seatNumber: number;
}
