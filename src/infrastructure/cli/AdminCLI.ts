import { question } from 'readline-sync';
import { CommandHandler } from '../../application/CommandHandler';
import { ApplicationService } from '../../domain/services/ApplicationService';

export class AdminCLI {
  private commandHandler: CommandHandler;

  constructor(applicationService: ApplicationService) {
    this.commandHandler = new CommandHandler(applicationService);
  }

  public menu(): void {
    try {
      while (true) {
        console.log("\n==== ADMIN MENU ====");
        console.log("choose admin action:");
        console.log("1. Register Flight");
        console.log("2. Register departure/destination");
        console.log("3. Create Flight Route");
        console.log("4. Advance To Next Day");
        console.log("5. Run Flight");
        console.log("6. Exit");

        const input = question('\n> ');
        switch (input) {
          case "1":
            const flightMessages = this.commandHandler.registerFlight();
            flightMessages.forEach(message => console.log(message));
            break;
          case "2":
            const cityMessages = this.commandHandler.registerCity();
            cityMessages.forEach(message => console.log(message));
            break;
          case "3":
            const routeMessages = this.commandHandler.registerRoute();
            routeMessages.forEach(message => console.log(message));
            break;
          case "4":
            break;
          case "5":
            break;
          case "6":
            console.log("Exiting admin panel...");
            return;
          default:
            console.log("❌ Invalid option. Please enter 1-6.");
        }
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      console.log(`Error: ${errorMessage}`);
    }
  }
}