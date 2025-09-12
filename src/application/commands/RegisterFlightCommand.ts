import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';
import { parseNumber } from '../../utils/utils';

export class RegisterFlightCommand {
  public execute(applicationService: ApplicationService): string[] {
    const flightId = question('Enter Flight Id: ');
    const flightCapacity = question('Enter Flight Capacity: ');

    const capacityCheck = parseNumber(flightCapacity);
    if (!capacityCheck.valid) {
      return [capacityCheck.error!];
    }

    try {
      const messages = applicationService
        .getFlightService()
        .registerFlight(flightId, capacityCheck.amount!);
      return messages;
    } catch {
      return ['Register flight failed. Please try again.'];
    }
  }
}
