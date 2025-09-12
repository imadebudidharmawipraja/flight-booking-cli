import { IPassenger } from './IPassenger';

export interface IPassengerRepository {
  create(passenger: IPassenger): IPassenger;
  findByName(name: string): IPassenger | null;
  findAll(): IPassenger[];
}
