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
      {link: 'about', linkText: 'About Us'},
      {link: 'contact', linkText: 'Contact Us'}
    ];
  }


  ngOnInit() {
  }

}
