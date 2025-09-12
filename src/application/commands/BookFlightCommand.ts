import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';

export class BookFlightCommand {
  public execute(applicationService: ApplicationService): string[] {
    try {
      const destinations = applicationService.getCityService().getCities();
      const currentDay = applicationService
        .getCurrentDayService()
        .getCurrentDay();
      const currentUser = applicationService
        .getSessionService()
        .getCurrentUser();

      console.log('== BOOK A FLIGHT ==');
      console.log(`Available destinations: ${destinations}`);
      const departure = question('Enter departure: ').trim();
      const destination = question('Enter destination: ').trim();

      if (!departure) {
        return ['Departure cannot be empty. Please try again.'];
      }

      if (!destination) {
        return ['Destination cannot be empty. Please try again.'];
      }

      const flightResult = applicationService
        .getRouteService()
        .getAvailableBookFlight(departure, destination, currentDay);

      if (flightResult.availableRoute.length === 0) {
        // console.log(['no flight is available for that route']);
        return ['No flights available for the selected route.'];
      }

      const selectedRoute = flightResult.availableRoute[0]; // Use first available route
      flightResult.message.forEach(msg => console.log(msg));

      const confirm = question('Confirm booking (y/n): ').trim().toLowerCase();
      if (confirm === 'y') {
        const departureCityId = applicationService
          .getCityService()
          .getCityIdByName(selectedRoute.departureCity);
        const destinationCityId = applicationService
          .getCityService()
          .getCityIdByName(selectedRoute.destinationCity);
        const bookingId = `${departureCityId} - ${destinationCityId} - ${selectedRoute.scheduledDay}`;
        applicationService
          .getBookingService()
          .createBooking(
            bookingId,
            currentUser,
            selectedRoute.id,
            'BOOKED',
            selectedRoute.scheduledDay
          );
        return [
          `Booking confirmed! Flight from ${selectedRoute.departureCity} to ${selectedRoute.destinationCity} on day ${selectedRoute.scheduledDay}`,
        ];
      } else {
        return ['Booking cancelled.'];
      }
    } catch {
      return ['Book a flight failed. Please try again.'];
    }
  }
}
