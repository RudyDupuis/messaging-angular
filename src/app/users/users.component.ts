import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users : String[] = [];

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.userService.userEmetteur.subscribe((value) => this.users = value);
  }
  ngOnDestroy(): void {
    this.userService.userEmetteur.unsubscribe();
  }
}
