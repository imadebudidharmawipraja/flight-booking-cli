import { IRouteRepository } from '../interfaces';
import { Route } from '../models/Route';

export class RouteRepository implements IRouteRepository {
  private routes: Map<string, Route> = new Map();

  create(route: Route): Route {
    this.routes.set(route.id, route);
    return route;
  }

  findById(id: string): Route | null {
    return this.routes.get(id) || null;
  }

  findByScheduledDay(scheduledDay: number): Route[] {
    const routes: Route[] = [];
    for (const route of this.routes.values()) {
      if (route.scheduledDay === scheduledDay) {
        routes.push(route);
      }
    }
    return routes;
  }

  findByCities(departure: string, destination: string): Route[] {
    return Array.from(this.routes.values()).filter(
      route =>
        route.departureCity === departure &&
        route.destinationCity === destination
    );
  }

  findAll(): Route[] {
    return Array.from(this.routes.values());
  }
}
