import { ApplicationService } from '../domain/services/ApplicationService';
import { BookFlightCommand } from './commands/BookFlightCommand';
import { CancelFlightCommand } from './commands/CancelFlightCommand';
import { RegisterCityCommand } from './commands/RegisterCityCommand';
import { RegisterFlightCommand } from './commands/RegisterFlightCommand';
import { RegisterRouteCommand } from './commands/RegisterRouteCommand';

export class CommandHandler {
  private applicationService: ApplicationService;
  private bookFlightCommand: BookFlightCommand;
  private cancelFlightCommand: CancelFlightCommand;
  private registerCityCommand: RegisterCityCommand;
  private registerFlightCommand: RegisterFlightCommand;
  private registerRouteCommand: RegisterRouteCommand;

  constructor(applicationService: ApplicationService) {
    this.applicationService = applicationService;
    this.bookFlightCommand = new BookFlightCommand();
    this.cancelFlightCommand = new CancelFlightCommand();
    this.registerCityCommand = new RegisterCityCommand();
    this.registerFlightCommand = new RegisterFlightCommand();
    this.registerRouteCommand = new RegisterRouteCommand();
  }

  public bookFlight(): string[] {
    return this.bookFlightCommand.execute(this.applicationService);
  }

  public cancelFlight(): string[] {
    return this.cancelFlightCommand.execute(this.applicationService);
  }

  public registerCity(): string[] {
    return this.registerCityCommand.execute(this.applicationService);
  }

  public registerFlight(): string[] {
    return this.registerFlightCommand.execute(this.applicationService);
  }

  public registerRoute(): string[] {
    return this.registerRouteCommand.execute(this.applicationService);
  }
}
