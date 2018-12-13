import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  list: any;
  footerValue: string;
  incFontSize = false;
  decFontSize = false;
  constructor() {
    this.list = [
      {linkText: 'Twitter', linkCls: 'fa fa-twitter'},
      {linkText: 'Instagram', linkCls: 'fa fa-instagram'},
      {linkText: 'Facebook', linkCls: 'fa fa-facebook'}
    ];
    this.footerValue = 'Follow Us';
   }

  ngOnInit() {
  }

  inc() {
    this.incFontSize = true;
    this.decFontSize = false;
  }

  dec() {
    this.incFontSize = false;
    this.decFontSize = true;
  }
}
