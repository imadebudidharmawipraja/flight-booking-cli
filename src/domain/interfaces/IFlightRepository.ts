import { IFlight } from './IFlight';

export interface IFlightRepository {
  create(passenger: IFlight): IFlight;
  findAll(): IFlight[];
  findById(id: string): IFlight | undefined;
}
