import { BookingStatus, IBooking } from "./IBooking";
import { IBookingRepository } from "./IBookingRepository";

export interface IBookingService {
    repository: IBookingRepository;
    createBooking(id: string, passengerName: string, routeId: string, status: BookingStatus, flightDay: number): IBooking;
    getAllBookings(): IBooking[];
    getBookingByScheduledDay(day: number): IBooking[];
    getBookingsByPassenger(passengerName: string): IBooking[];
    updateBookingStatus(id: string, status: BookingStatus): IBooking | undefined;
    cancelBooking(id: string): string[];
}
