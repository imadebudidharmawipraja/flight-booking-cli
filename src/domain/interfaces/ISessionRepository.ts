export interface ISessionRepository {
  setCurrentUser(name: string): void;
  getCurrentUser(): string;
  deleteCurrentUser(): void;
  hasActiveSession(): boolean;
}
