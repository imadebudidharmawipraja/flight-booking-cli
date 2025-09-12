import { IBookingRepository, IBookingService } from '../interfaces';
import { BookingStatus } from '../interfaces/IBooking';
import { Booking } from '../models/Booking';

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
    const seatNumber = this.getNextAvailableSeat(routeId);
    const booking = new Booking(
      id,
      passengerName,
      routeId,
      status,
      flightDay,
      seatNumber
    );
    return this.repository.create(booking);
  }

  public getAllBookings(): Booking[] {
    return this.repository.findAll();
  }

  public getBookingByScheduledDay(day: number): Booking[] {
    return this.repository
      .findAll()
      .filter(booking => booking.flightDay === day);
  }

  public getBookingsByPassenger(passengerName: string): Booking[] {
    return this.repository.findByPassengerName(passengerName);
  }

  public updateBookingStatus(
    id: string,
    status: BookingStatus
  ): Booking | undefined {
    const booking = this.repository.findById(id);
    if (booking) {
      booking.status = status;
      return booking;
    }
    return undefined;
  }

  public cancelBooking(id: string, currentUser: string): string[] {
    const booking = this.repository.findById(id);
    if (!booking) {
      return ['Booking not found.'];
    }

    if (booking.passengerName !== currentUser) {
      return ['You can only cancel your own bookings.'];
    }

    this.repository.delete(id);
    return ['Booking cancelled successfully.'];
  }

  public getNextAvailableSeat(routeId: string): number {
    const existingBookings = this.repository.findByRoute(routeId);
    const takenSeats = new Set(
      existingBookings.map(booking => booking.seatNumber)
    );

    let seatNumber = 1;

    while (takenSeats.has(seatNumber)) {
      seatNumber++;
    }

    return seatNumber;
  }
}
