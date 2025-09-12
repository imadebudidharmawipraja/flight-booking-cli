import { question } from "readline-sync";
import { ApplicationService } from "../../domain/services/ApplicationService";

export class CancelFlightCommand {
    public execute(applicationService: ApplicationService): string[] {
        const bookingId = question("Enter Booking ID: ");

        try {
            const messages = applicationService.getBookingService().cancelBooking(bookingId);
            return messages;
        } catch (error) {
            return ['Cancel flight failed. Please try again.'];
        }
    }
}
