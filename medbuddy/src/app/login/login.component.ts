import { Component, OnInit } from '@angular/core';
import { CompInteractionService } from '../comp-interaction.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:  FormGroup;

  formConfig = [
    {label: 'User Name', name: 'userName', type: 'text', constraint: Validators.required },
    {label: 'Password', name: 'password', type: 'password', constraint: Validators.required }
  ];

  constructor(private compInteractionService: CompInteractionService, private builder: FormBuilder, private route: Router) { }


  ngOnInit() {
     this.loginForm = this.builder.group({});
     this.formConfig.forEach( eachConfig => {
      this.loginForm.addControl(eachConfig.name, new FormControl('', {validators: eachConfig.constraint}));
    });
  }

  signIn() {
    this.compInteractionService.changeCurrentStatus('logged');
    const uname = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.password.value;
    if (uname === 'Anil' && pwd === 'kumar') {
      sessionStorage.setItem('status', 'logged');
      this.route.navigate(['home']);

    }
  }
}
