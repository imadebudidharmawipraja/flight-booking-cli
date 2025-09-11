import { IRoute } from './IRoute';

export interface IRouteRepository {
  create(route: IRoute): IRoute;
  findById(id: string): IRoute | null;
  findByScheduledDay(scheduledDay: number): IRoute[];
  findAll(): IRoute[];
}
