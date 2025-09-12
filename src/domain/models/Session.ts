import { ISession } from '../interfaces';

export class Session implements ISession {
  currentUser: string;

  constructor(currentUser: string) {
    this.currentUser = currentUser;
  }
}
