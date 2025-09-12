import { ICity } from './ICity';

export interface ICityRepository {
  create(passenger: ICity): ICity;
  findAll(): ICity[];
  findById(id: string): ICity | undefined;
  findByName(name: string): ICity | undefined;
  isExist(name: string): boolean;
}
