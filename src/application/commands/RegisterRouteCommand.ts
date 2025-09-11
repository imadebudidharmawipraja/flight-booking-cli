import { question } from "readline-sync";
import { ApplicationService } from "../../domain/services/ApplicationService";
import { arrayToString, parseNumber } from "../../utils/utils";

export class RegisterRouteCommand {
  public execute(applicationService: ApplicationService): string[] {
    const cityService = applicationService.getCityService();
    const routeService = applicationService.getRouteService();
    cityService.getCities();

    const departureCity = question("Enter Departure City: ");
    //check if city exist
    if (!cityService.isCityExist(departureCity)) {
      return [`selected city is not available as departure city`]
    };

    const destinationCity = question("Enter Destination City: ");
    //check if city exist
    if (cityService.isCityExist(destinationCity)) {
      return [`selected city is not available as destination city`]
    }

    //check same departure and destination
    if (departureCity === destinationCity) {
      return ['Departure and Destination city cannot be the same'];
    }

    const scheduledDay = question("Enter Scheduled Day in Week (1-7): ");
    //check for correct day value
    const dayCheck = parseNumber(scheduledDay);
    if (!dayCheck.valid) {
      return [dayCheck.error!];
    };

    //get and print available flight on selected day
    const availableFlight = routeService.getAvailableFlightByDay(dayCheck.amount!);
    console.log(`available flight on selected day are: ${arrayToString(availableFlight, 'id')}`);
    const flightId = question("Enter Flight Id: ");

    //check available flight on that day
    if (!availableFlight.some(flight => flight.id === flightId)) {
      return ['flight Id is not valid or not available']
    };

    try {
      const messages = applicationService.getRouteService().registerRoute(
        departureCity, destinationCity, dayCheck.amount!, flightId
      );
      return messages;
    } catch (error) {
      return ['Register route failed. Please try again.'];
    }
  }

}
