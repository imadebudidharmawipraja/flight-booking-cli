import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';

export class PassengerCLI {
  private applicationService: ApplicationService;

  constructor(applicationService: ApplicationService) {
    this.applicationService = applicationService;
  }

  public menu(): void {
    try {
      while (true) {
        const currentDay = this.applicationService.getCurrentDayService().getCurrentDay();
        const currentUser = this.applicationService.getSessionService().getCurrentUser();

        console.log(`\n==== PASSENGER PANEL (${currentUser}) ====`);
        console.log(`Current day: ${currentDay}`);
        console.log("1. Book a Flight");
        console.log("2. Cancel a Booking");
        console.log("3. Exit");

        const input = question('\n> ');
        switch (input) {
          case "1":
            // book flight
            break;
          case "2":
            // cancel booking
            break;
          case "3":
            this.applicationService.getSessionService().logout();
            return;
          default:
            console.log("❌ Invalid option. Please enter 1-3.");
        }
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      console.log(`Error: ${errorMessage}`);
    }
  }

  public handlePassengerLogin(): void {
    console.log("\n==== PASSENGER LOGIN ====");
    const name = question('Enter passenger name: ').trim();

    if (!name) {
      console.log("❌ Name cannot be empty. Please try again.");
      return;
    }

    try {
      const messages = this.applicationService.getSessionService().loginPassenger(name);
      messages.forEach(message => console.log(`✅ ${message}`));
      this.menu();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error during login';
      console.log(`❌ Login failed: ${errorMessage}`);
    }
  }
}