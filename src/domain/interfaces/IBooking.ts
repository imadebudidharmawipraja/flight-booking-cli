export type BookingStatus = "ARRIVED" | "DEPARTED";

export interface IBooking {
  readonly id: string;
  passengerName: string;
  routeId: string;
  status: BookingStatus;
  flightDay: number;
}
