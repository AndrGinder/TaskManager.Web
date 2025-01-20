import { Component } from '@angular/core';

@Component({
  selector: 'startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {
  signUp = "signup"
  signIn = "signin"
  guest = "guest/task"
}
