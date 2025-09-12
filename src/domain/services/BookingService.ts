import { IBookingRepository, IBookingService } from "../interfaces";
import { BookingStatus } from "../interfaces/IBooking";
import { Booking } from "../models/Booking";

export class BookingService implements IBookingService {
    public repository: IBookingRepository;

    constructor(repository: IBookingRepository) {
        this.repository = repository;
    }

    public createBooking(
        id: string,
        passengerName: string,
        routeId: string,
        status: BookingStatus,
        flightDay: number
    ): Booking {
        const booking = new Booking(id, passengerName, routeId, status, flightDay);
        return this.repository.create(booking);
    }

    public getAllBookings(): Booking[] {
        return this.repository.findAll();
    }

    public getBookingByScheduledDay(day: number): Booking[] {
        return this.repository.findAll().filter(booking => booking.flightDay === day);
    }

    public getBookingsByPassenger(passengerName: string): Booking[] {
        return this.repository.findByPassengerName(passengerName);
    }

    public updateBookingStatus(id: string, status: BookingStatus): Booking | undefined {
        const booking = this.repository.findById(id);
        if (booking) {
            booking.status = status;
            return booking;
        }
        return undefined;
    }

    public deleteBooking(id: string): void {
        this.repository.delete(id);
    }

    public cancelBooking(id: string): string[] {
        try {
            const booking = this.repository.findById(id);
            if (!booking) {
                return ['Booking not found.'];
            }

            // Simply delete the booking to cancel it
            this.repository.delete(id);
            return ['Booking cancelled successfully.'];
        } catch (error) {
            return ['Failed to cancel booking. Please try again.'];
        }
    }
}
