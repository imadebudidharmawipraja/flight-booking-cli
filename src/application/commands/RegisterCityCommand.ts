import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';

export class RegisterCityCommand {
  public execute(applicationService: ApplicationService): string[] {
    const cityId = question('Enter City Code: ').trim();
    const cityName = question('Enter City Name: ').trim();

    if (!cityId) {
      return ['City code cannot be empty. Please try again.'];
    }

    if (!cityName) {
      return ['City name cannot be empty. Please try again.'];
    }

    try {
      const messages = applicationService
        .getCityService()
        .registerCity(cityId, cityName);
      return messages;
    } catch {
      return ['Register city failed. Please try again.'];
    }
  }
}
