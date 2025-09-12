import { question } from "readline-sync";
import { ApplicationService } from "../../domain/services/ApplicationService";

export class BookFlightCommand {
    public execute(applicationService: ApplicationService): string[] {

        try {
            const destinations = applicationService.getCityService().getCities()
            const currentDay = applicationService.getCurrentDayService().getCurrentDay()

            console.log("== BOOK A FLIGHT ==")
            console.log(`Available destinations: ${destinations}`)
            const departure = question("Enter departure: ")
            const destination = question("Enter destination: ")

            const messages = applicationService.getRouteService().getAvailableBookFlight(departure, destination, currentDay)
            return messages;
        } catch (error) {
            return ['Book a flight failed. Please try again.'];
        }
    }
}
