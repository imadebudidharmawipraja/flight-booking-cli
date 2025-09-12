import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';

export class CancelFlightCommand {
  public execute(applicationService: ApplicationService): string[] {
    const currentUser = applicationService.getSessionService().getCurrentUser();
    const userBookings = applicationService.getBookingService().getBookingsByPassenger(currentUser);

    if (userBookings.length === 0) {
      return ['You have no bookings to cancel.'];
    }

    console.log('== YOUR BOOKINGS ==');
    userBookings.forEach(booking => {
      console.log(`ID: ${booking.id} | Flight Day: ${booking.flightDay} | Status: ${booking.status}`);
    });

    const bookingId = question('Enter Booking ID to cancel: ');

    try {
      const messages = applicationService
        .getBookingService()
        .cancelBooking(bookingId, currentUser);
      return messages;
    } catch {
      return ['Cancel flight failed. Please try again.'];
    }
  }
}
