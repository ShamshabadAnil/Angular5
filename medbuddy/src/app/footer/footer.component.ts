import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,  AfterViewInit {
  list: any;
  footerValue: string;
  incFontSize = false;
  decFontSize = false;
  ratings: String[];
  reviews: string[];
  @ViewChild(FeedbackComponent)feeback: FeedbackComponent;
  constructor( private detector: ChangeDetectorRef) {
    this.list = [
      {linkText: 'Twitter', linkCls: 'fa fa-twitter'},
      {linkText: 'Instagram', linkCls: 'fa fa-instagram'},
      {linkText: 'Facebook', linkCls: 'fa fa-facebook'}
    ];
    this.footerValue = 'Follow Us';
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.ratings = this.feeback.getBestReview();
    this.reviews = this.feeback.getLatestReviews();
    this.detector.detectChanges();
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
