import { IBookingRepository } from "../interfaces";
import { Booking } from "../models/Booking";

/**
 * BookingRepository
 */
export class BookingRepository implements IBookingRepository {
  private bookings: Map<string, Booking> = new Map();

  constructor(bookings: Map<string, Booking>) {
    this.bookings = bookings || new Map<string, Booking>();
  }

  public create(booking: Booking): Booking {
    this.bookings.set(booking.id, booking);
    return booking;
  }

  public findAll(): Booking[] {
    return Array.from(this.bookings.values());
  }

  public findById(id: string): Booking | undefined {
    return this.bookings.get(id);
  }

  public findByPassengerName(passengerName: string): Booking[] {
    return Array.from(this.bookings.values()).filter(booking => booking.passengerName === passengerName);
  }

  public findByRoute(routeId: string): Booking[] {
    return Array.from(this.bookings.values()).filter(booking => booking.routeId === routeId);
  }

  public delete(id: string): boolean {
    return this.bookings.delete(id);
  }
}
