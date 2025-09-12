export interface ICityService {
  registerCity(id: string, name: string): string[];
  getCities(): string[];
  isCityExist(name: string): boolean;
  getCityIdByName(name: string): string | undefined;
}
