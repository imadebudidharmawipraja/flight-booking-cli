import {
  IPassengerRepository,
  ISessionRepository,
  ISessionService,
} from '../interfaces';
import { Passenger } from '../models/Passenger';

export class SessionService implements ISessionService {
  private sessionRepository: ISessionRepository;
  private passengerRepository: IPassengerRepository;

  constructor(
    sessionRepository: ISessionRepository,
    passengerRepository: IPassengerRepository
  ) {
    this.sessionRepository = sessionRepository;
    this.passengerRepository = passengerRepository;
  }

  loginAdmin(): void {
    this.sessionRepository.setCurrentUser('admin');
  }

  loginPassenger(name: string): { success: boolean; messages: string[] } {
    const messages = [];

    if (name.toLowerCase() === 'admin') {
      messages.push(`You cannot login as admin. Please try again.`);
      return { success: false, messages };
    }

    // Create passenger if not exist
    const passenger = this.passengerRepository.findByName(name);
    if (!passenger) {
      this.passengerRepository.create(new Passenger(name));
    }
    this.sessionRepository.setCurrentUser(name);

    messages.push(`Welcome, ${name}!`);
    return { success: true, messages };
  }

  logout(): void {
    this.sessionRepository.deleteCurrentUser();
  }

  getCurrentUser(): string {
    return this.sessionRepository.getCurrentUser();
  }

  isAdminLoggedIn(): boolean {
    return this.sessionRepository.getCurrentUser() === 'admin';
  }

  isPassengerLoggedIn(): boolean {
    const currentUser = this.sessionRepository.getCurrentUser();
    return currentUser !== '' && currentUser !== 'admin';
  }

  hasActiveSession(): boolean {
    return this.sessionRepository.hasActiveSession();
  }
}
