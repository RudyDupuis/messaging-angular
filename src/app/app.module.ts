import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
