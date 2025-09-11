import { IFlight } from "./IFlight";
import { IFlightRepository } from "./IFlightRepository";

export interface IFlightService {
  repository: IFlightRepository;
  registerFlight(id: string, capacity: number): IFlight;
}
