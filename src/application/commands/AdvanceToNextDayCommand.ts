import { ApplicationService } from '../../domain/services/ApplicationService';

export class AdvanceToNextDayCommand {
    public execute(applicationService: ApplicationService): string[] {
        try {
            let messages: string[] = [];
            const currentDayService = applicationService.getCurrentDayService();
            const bookingService = applicationService.getBookingService();

            const currentDay = currentDayService.getCurrentDay();
            const currentDayBookings = bookingService.getBookingByScheduledDay(currentDay);

            const updatedBookings: string[] = [];
            currentDayBookings.forEach(booking => {
                if (booking.status !== 'ARRIVED') {
                    bookingService.updateBookingStatus(booking.id, 'ARRIVED');
                    updatedBookings.push(`Booking ${booking.id} (${booking.passengerName}) updated to ARRIVED`);
                }
            });

            const nextDay = currentDayService.advanceToNextDay();

            messages.push('Advancing to next day...');
            messages.push(`Current day is now: ${nextDay}`);

            return messages;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return [`❌ Failed to advance to next day: ${errorMessage}`];
        }
    }
}
