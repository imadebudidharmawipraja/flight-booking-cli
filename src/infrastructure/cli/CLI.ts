import { question } from 'readline-sync';
import { AdminCLI } from './AdminCLI';

export class CLI {
  private adminCLI: AdminCLI;

  constructor() {
    this.adminCLI = new AdminCLI();
  }

  public start(): void {
    try {
      while (true) {
        console.log("\n==== SIMPLE FLIGHT BOOKING & RUNNING SYSTEM ====");
        console.log("Login as:");
        console.log("1. Admin");
        console.log("2. Passenger");

        const input = question('> ');
        switch (input) {
          case "1":
            this.adminCLI.menu();
            break;
          case "2":
            this.userMenu()
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

  private userMenu() {
    while (true) {
      console.log("\n==== PASSENGER PANEL ====");
      console.log("3. Exit");

      const input = question("> ");

      switch (input) {
        case "3":
          return;
        default:
          console.log("❌ Invalid option. Try again.");
      }
    }
  }
}
