import { IFlight } from "../interfaces";

/**
 * Flight model.
 */
export class Flight implements IFlight {
  readonly id: string;
  capacity: number;

  constructor(id: string, capacity: number) {
    this.id = id;
    this.capacity = capacity;
  }
}

