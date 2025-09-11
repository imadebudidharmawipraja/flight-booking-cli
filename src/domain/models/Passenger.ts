import { IPassenger } from '../interfaces';

export class Passenger implements IPassenger {
    // Name as unique identifier
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}
