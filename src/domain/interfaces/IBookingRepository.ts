import { IBooking } from './IBooking';

export interface IBookingRepository {
  create(booking: IBooking): IBooking;
  findAll(): IBooking[];
  findById(id: string): IBooking | undefined;
  findByPassengerName(passengerName: string): IBooking[];
  findByRoute(RouteId: string): IBooking[];
}
