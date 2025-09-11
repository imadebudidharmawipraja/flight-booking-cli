import { ICityRepository, ICityService, IFlightRepository, IFlightService, IPassengerRepository, IRouteRepository, IRouteService, ISessionRepository, ISessionService } from "../interfaces";
import { CityRepository } from "../repositories/CityRepository";
import { FlightRepository } from "../repositories/FlightRepository";
import { PassengerRepository } from "../repositories/PassengerRepository";
import { RouteRepository } from "../repositories/RouteRepository";
import { SessionRepository } from "../repositories/SessionRepository";
import { CityService } from "./CityService";
import { FlightService } from "./FlightService";
import { RouteService } from "./RouteService";
import { SessionService } from "./SessionService";

/**
 * ApplicationService - Main application service that orchestrates all other services
 */
export class ApplicationService {
  private cityRepository: ICityRepository;
  private flightRepository: IFlightRepository;
  private passengerRepository: IPassengerRepository;
  private routeRepository: IRouteRepository;
  private sessionRepository: ISessionRepository;

  private cityService: ICityService;
  private flightService: IFlightService;
  private routeService: IRouteService;
  private sessionService: ISessionService;

  constructor() {
    this.cityRepository = new CityRepository();
    this.flightRepository = new FlightRepository();
    this.passengerRepository = new PassengerRepository();
    this.routeRepository = new RouteRepository();
    this.sessionRepository = new SessionRepository();

    this.cityService = new CityService(this.cityRepository);
    this.flightService = new FlightService(this.flightRepository);
    this.routeService = new RouteService(this.routeRepository);
    this.sessionService = new SessionService(this.sessionRepository, this.passengerRepository);
  }

  public getCityService(): ICityService {
    return this.cityService;
  }

  public getFlightService(): IFlightService {
    return this.flightService;
  }

  public getRouteService(): IRouteService {
    return this.routeService;
  }

  public getSessionService(): ISessionService {
    return this.sessionService;
  }
}
