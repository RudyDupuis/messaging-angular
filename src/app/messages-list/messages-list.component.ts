import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit, OnDestroy{
  messages : Message[] = [];

  constructor(private messageService : MessageService) {}

  ngOnInit(): void {
    this.messageService.messageEmetteur.subscribe((value) => this.messages = value);
  }
  ngOnDestroy(): void {
    this.messageService.messageEmetteur.unsubscribe();
  }
  
}
