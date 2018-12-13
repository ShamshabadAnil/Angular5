import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getLatestReviews(): string[] {
    return ['Best and timely service by Doctor, Appaji,Indian Bank, Channai',
    'Lab test reports reached our home, Amrutham,Indian Bank, Channai' ];
  }

  getBestReview(): String[] {
    return ['*****,maggy,pune',
  '***,andjksdahif,pnjn'];
  }
}
