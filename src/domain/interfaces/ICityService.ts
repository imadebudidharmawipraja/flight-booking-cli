import { ICity } from "./ICity";
import { ICityRepository } from "./ICityRepository";

export interface ICityService {
  repository: ICityRepository;
  registerCity(id: string, name: string): ICity;
}
