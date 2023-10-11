import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = ["Paul", "Jean", "Pierre", "Rudy"];
  messages = [["Paul", new Date(), "Mon premier message !"], ["Pierre",  new Date(), "Message écrit avec angular"], ["Rudy",  new Date(), "J'aime pas trop angular ..."], ["Rudy",  new Date(), "Le message qui sert à déborder !"]];
}
