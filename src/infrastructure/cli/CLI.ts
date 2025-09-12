import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';
import { AdminCLI } from './AdminCLI';
import { PassengerCLI } from './PassengerCLI';

export class CLI {
  private adminCLI: AdminCLI;
  private passengerCLI: PassengerCLI;
  private applicationService: ApplicationService;

  constructor() {
    this.applicationService = new ApplicationService();
    this.adminCLI = new AdminCLI(this.applicationService);
    this.passengerCLI = new PassengerCLI(this.applicationService);
  }

  public start(): void {
    try {
      while (true) {
        console.log("\n==== SIMPLE FLIGHT BOOKING & RUNNING SYSTEM ====");
        console.log("Login as:");
        console.log("1. Admin");
        console.log("2. Passenger");

        const input = question('\n> ');
        switch (input) {
          case "1":
            this.adminCLI.menu();
            break;
          case "2":
            this.passengerCLI.handlePassengerLogin();
            break;
          default:
            console.log("❌ Invalid option. Please enter 1 or 2.");
        }
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      console.log(`Error: ${errorMessage}`);
    }
  }
}
