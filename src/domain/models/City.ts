import { ICity } from "../interfaces";

/**
 * a City Model.
 */
export class City implements ICity {
  readonly id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

