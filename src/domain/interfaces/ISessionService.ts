export interface ISessionService {
  loginAdmin(): void;
  loginPassenger(name: string): { success: boolean; messages: string[] };
  logout(): void;
  getCurrentUser(): string;
  isAdminLoggedIn(): boolean;
  isPassengerLoggedIn(): boolean;
  hasActiveSession(): boolean;
}
