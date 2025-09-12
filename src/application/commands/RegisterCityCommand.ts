import { question } from 'readline-sync';
import { ApplicationService } from '../../domain/services/ApplicationService';

export class RegisterCityCommand {
  public execute(applicationService: ApplicationService): string[] {
    const cityId = question('Enter City Code: ');
    const cityName = question('Enter City Name: ');

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
