import { question } from 'readline-sync';

export class AdminCLI {
  public menu(): void {
    try {
      while (true) {
        console.log("\n==== ADMIN MENU ====");
        console.log("choose admin action:");
        console.log("1. Register Flight");
        console.log("2. Register departure/destination");
        console.log("3. Create Flight Route");
        console.log("4. Proceed Day");
        console.log("5. End Day");
        console.log("6. Exit");

        const input = question('\n> ');
        switch (input) {
          case "1":
            //register flight
            break;
          case "2":
            //register city
            break;
          case "3":
            //create route
            break;
          case "4":
            //proceed day
            break;
          case "5":
            //end day
            break;
          case "6":
            //exit
            break;
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