import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-create',
  templateUrl: './messages-create.component.html',
  styleUrls: ['./messages-create.component.scss']
})
export class MessagesCreateComponent {
    pseudo : string = "";
    message: string = "";
    date: Date = new Date();
    
    onSubmit() : void {
        console.log(this.pseudo + " " + this.message)
    }
}
