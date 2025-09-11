import { IPassengerRepository, ISessionRepository, ISessionService } from "../interfaces";
import { PassengerRepository } from "../repositories/PassengerRepository";
import { SessionRepository } from "../repositories/SessionRepository";
import { SessionService } from "./SessionService";

/**
 * ApplicationService - Main application service that orchestrates all other services
 */
export class ApplicationService {
    private sessionRepository: ISessionRepository;
    private passengerRepository: IPassengerRepository;

    private sessionService: ISessionService;

    constructor() {
        this.sessionRepository = new SessionRepository();
        this.passengerRepository = new PassengerRepository();

        this.sessionService = new SessionService(this.sessionRepository, this.passengerRepository);
    }

    public getSessionService(): ISessionService {
        return this.sessionService;
    }
}
