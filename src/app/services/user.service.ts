import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : string[];
  public userEmetteur: EventEmitter<string[]>;

  constructor() { 
    this.users = [];
    this.userEmetteur = new EventEmitter();
  }

  private notify(): void {
    this.userEmetteur.emit(this.users.slice());
  }

  public addUser(user : string) {
    if(!this.users.includes(user)) {
      this.users.unshift(user);
      this.notify();
    }
  }
}
