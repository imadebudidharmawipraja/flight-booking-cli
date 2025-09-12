import { IBookingRepository, IBookingService, ICityRepository, ICityService, ICurrentDayRepository, ICurrentDayService, IFlightRepository, IFlightService, IPassengerRepository, IRouteRepository, IRouteService, ISessionRepository, ISessionService } from "../interfaces";
import { BookingRepository } from "../repositories/BookingRepository";
import { CityRepository } from "../repositories/CityRepository";
import { CurrentDayRepository } from "../repositories/CurrentDayRepository";
import { FlightRepository } from "../repositories/FlightRepository";
import { PassengerRepository } from "../repositories/PassengerRepository";
import { RouteRepository } from "../repositories/RouteRepository";
import { SessionRepository } from "../repositories/SessionRepository";
import { BookingService } from "./BookingService";
import { CityService } from "./CityService";
import { CurrentDayService } from "./CurrentDayService";
import { FlightService } from "./FlightService";
import { RouteService } from "./RouteService";
import { SessionService } from "./SessionService";

/**
 * ApplicationService - Main application service that orchestrates all other services
 */
export class ApplicationService {
  private cityRepository: ICityRepository;
  private currentDayRepository: ICurrentDayRepository;
  private flightRepository: IFlightRepository;
  private passengerRepository: IPassengerRepository;
  private routeRepository: IRouteRepository;
  private sessionRepository: ISessionRepository;
  private bookingRepository: IBookingRepository;

  private bookingService: IBookingService;
  private cityService: ICityService;
  private currentDayService: ICurrentDayService;
  private flightService: IFlightService;
  private routeService: IRouteService;
  private sessionService: ISessionService;

  constructor() {
    this.cityRepository = new CityRepository();
    this.currentDayRepository = new CurrentDayRepository();
    this.flightRepository = new FlightRepository();
    this.passengerRepository = new PassengerRepository();
    this.routeRepository = new RouteRepository();
    this.sessionRepository = new SessionRepository();
    this.bookingRepository = new BookingRepository();

    this.bookingService = new BookingService(this.bookingRepository);
    this.cityService = new CityService(this.cityRepository);
    this.currentDayService = new CurrentDayService(this.currentDayRepository);
    this.flightService = new FlightService(this.flightRepository);
    this.routeService = new RouteService(this.routeRepository, this.flightRepository, this.bookingRepository);
    this.sessionService = new SessionService(this.sessionRepository, this.passengerRepository);
  }

  public getBookingService(): IBookingService {
    return this.bookingService;
  }

  public getCityService(): ICityService {
    return this.cityService;
  }

  public getCurrentDayService(): ICurrentDayService {
    return this.currentDayService;
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
