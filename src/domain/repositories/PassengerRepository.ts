import { IPassengerRepository } from '../interfaces';
import { Passenger } from '../models/Passenger';

export class PassengerRepository implements IPassengerRepository {
    private passengers: Map<string, Passenger> = new Map();

    create(passenger: Passenger): Passenger {
        this.passengers.set(passenger.name, passenger);
        return passenger;
    }

    findByName(name: string): Passenger | null {
        return this.passengers.get(name) || null;
    }

    findAll(): Passenger[] {
        return Array.from(this.passengers.values());
    }
}
