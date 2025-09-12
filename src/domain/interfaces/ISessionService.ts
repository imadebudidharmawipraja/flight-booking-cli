export interface ISessionService {
  loginAdmin(): void;
  loginPassenger(name: string): string[];
  logout(): void;
  getCurrentUser(): string;
  isAdminLoggedIn(): boolean;
  isPassengerLoggedIn(): boolean;
  hasActiveSession(): boolean;
}
