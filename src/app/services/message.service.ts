import { EventEmitter, Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages : Message[];
  public messageEmetteur: EventEmitter<Message[]>;

  constructor() { 
    this.messages = [];
    this.messageEmetteur = new EventEmitter();
  }

  private notify(): void {
    this.messageEmetteur.emit(this.messages.slice());
  }

  public addMessage(message : Message) {
    this.messages.unshift(message);
    this.notify();
  }
}
