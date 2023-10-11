import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-messages-create',
  templateUrl: './messages-create.component.html',
  styleUrls: ['./messages-create.component.scss']
})
export class MessagesCreateComponent {
  messageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private userService: UserService) { 
    this.createForm();
  }

  private createForm() {
    this.messageForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  invalidField(field: string): boolean { 
    return this.messageForm.controls[field].invalid && (this.messageForm.controls[field].dirty || this.messageForm.controls[field].touched);
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const message: Message = {
        pseudo: this.messageForm.controls['pseudo'].value,
        message: this.messageForm.controls['message'].value,
        date: new Date()
      };

      this.messageService.addMessage(message);
      this.userService.addUser(message.pseudo);

      this.messageForm.reset();
    }
  }
}
