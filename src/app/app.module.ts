import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesCreateComponent } from './messages-create/messages-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessagesListComponent,
    MessagesCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
