import { ApplicationService } from '../../domain/services/ApplicationService';

export class RunFlightCommand {
  public execute(applicationService: ApplicationService): string[] {
    const messages: string[] = [];
    const currentDay = applicationService
      .getCurrentDayService()
      .getCurrentDay();
    const bookingService = applicationService.getBookingService();
    const routeService = applicationService.getRouteService();

    messages.push(`Running flight for day ${currentDay}`);

    const todayBookings = bookingService.getBookingByScheduledDay(currentDay);

    if (todayBookings.length === 0) {
      messages.push('No flights scheduled for today.');
      return messages;
    }

    const bookingsByRoute = new Map<string, any[]>();

    todayBookings.forEach(booking => {
      if (!bookingsByRoute.has(booking.routeId)) {
        bookingsByRoute.set(booking.routeId, []);
      }
      bookingsByRoute.get(booking.routeId)!.push(booking);
    });

    bookingsByRoute.forEach((bookings, routeId) => {
      const route = routeService.getRouteById(routeId);
      if (!route) {
        messages.push(`Error: Route ${routeId} not found`);
        return;
      }

      const departureCity = route.departureCity;
      const destinationCity = route.destinationCity;
      const totalPassenger = bookings.length;

      messages.push(
        `Processing flight: ${departureCity} -> ${destinationCity}`
      );
      messages.push(`Passenger boarding: ${totalPassenger}`);

      bookings.forEach(booking => {
        messages.push(`  - ${booking.passengerName}`);
      });

      messages.push('Flight Status: DEPARTED');

      bookings.forEach(booking => {
        bookingService.updateBookingStatus(booking.id, 'ARRIVED');
      });

      messages.push('Flight Status: ARRIVED');
      messages.push(`All passenger have reached ${destinationCity}`);
      messages.push('');
    });

    return messages;
  }
}
