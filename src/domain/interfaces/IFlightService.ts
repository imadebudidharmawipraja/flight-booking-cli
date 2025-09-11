export interface IFlightService {
  registerFlight(id: string, capacity: number): string[];
}
