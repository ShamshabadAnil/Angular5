import { Component, OnInit } from '@angular/core';
import { CompInteractionService } from '../comp-interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private compInteractionService: CompInteractionService) { }

  ngOnInit() {
  }

  signIn() {
    this.compInteractionService.changeCurrentStatus('logged');
  }
}
