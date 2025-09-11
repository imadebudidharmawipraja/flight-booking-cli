import { ISession, ISessionRepository } from "../interfaces";
import { Session } from "../models/Session";

export class SessionRepository implements ISessionRepository {
    private session: ISession | null = null;

    constructor() {
        this.session = null;
    }

    setCurrentUser(name: string): void {
        this.session = new Session(name);
    }

    getCurrentUser(): string {
        if (!this.session) {
            return "";
        }
        return this.session.currentUser;
    }

    deleteCurrentUser(): void {
        this.session = null;
    }

    hasActiveSession(): boolean {
        return this.session !== null && this.session.currentUser.trim() !== "";
    }
}
