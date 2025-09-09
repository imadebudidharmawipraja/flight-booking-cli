import { question } from 'readline-sync';

export class CLI {
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
            this.adminMenu()
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

  private adminMenu() {
    while (true) {
      console.log("\n==== ADMIN PANEL ====");
      console.log("7. Exit");

      const choice = question("Select an option (1-3): ");

      switch (choice) {
        case "7":
          return;
        default:
          console.log("❌ Invalid option. Try again.");
      }
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
