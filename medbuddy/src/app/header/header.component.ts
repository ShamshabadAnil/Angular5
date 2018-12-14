import { Component, OnInit } from '@angular/core';
import { Links } from '../links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo: string;
  links: Links[];
  constructor() {
    this.logo = 'assets/images/Koala.jpg';
    this.links = [
      {link: 'home', linkText: 'Home'},
      {link: 'login', linkText: 'Login'},
      {link: 'logout', linkText: 'Logout'},
      {link: 'history', linkText: 'My Transactions '},
      {link: 'hospital', linkText: 'Hospitals'},
      {link: 'medicine', linkText: 'Show Stock'},
      {link: 'doctors', linkText: 'Doctors'},
      {link: 'about', linkText: 'About Us'}
    ];
  }


  ngOnInit() {
  }

}
