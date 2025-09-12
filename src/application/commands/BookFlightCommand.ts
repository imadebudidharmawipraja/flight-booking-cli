import { question } from "readline-sync";
import { ApplicationService } from "../../domain/services/ApplicationService";

export class BookFlightCommand {
    public execute(applicationService: ApplicationService): string[] {

        try {
            const destinations = applicationService.getCityService().getCities()
            const currentDay = applicationService.getCurrentDayService().getCurrentDay()
            const currentUser = applicationService.getSessionService().getCurrentUser()

            console.log("== BOOK A FLIGHT ==")
            console.log(`Available destinations: ${destinations}`)
            const departure = question("Enter departure: ")
            const destination = question("Enter destination: ")

            const availableFlights = applicationService.getRouteService().getAvailableBookFlight(departure, destination, currentDay)
            if (availableFlights.length === 0) {
                console.log(['no flight is available for that route']);
            } else {
                console.log(`flight found: ${departure} - ${destination} on day ${availableFlights[0].scheduledDay}`);
            }

            const confirm = question("Confirm booking (y/n): ")
            if (confirm === "y") {
                const selectedFlight = availableFlights[0]; // Use first available flight
                applicationService.getBookingService().createBooking(
                    selectedFlight.id,
                    currentUser,
                    selectedFlight.id,
                    "BOOKED",
                    selectedFlight.scheduledDay
                )
                return [`Booking confirmed! Flight from ${selectedFlight.departureCity} to ${selectedFlight.destinationCity} on day ${selectedFlight.scheduledDay}`];
            } else {
                return ["Booking cancelled."];
            }
        } catch (error) {
            return ['Book a flight failed. Please try again.'];
        }
    }
}
