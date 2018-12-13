import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Hospitals } from '../hospitals';
import { MedbuddyAPIService } from '../medbuddy-api.service';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterViewInit {

  @ViewChild(FeedbackComponent)feeback: FeedbackComponent;
  hospitalList: Hospitals[];
  ratings: String[];
  reviews: string[];

  constructor(private service: MedbuddyAPIService, private detector: ChangeDetectorRef) { }

  ngOnInit() {
    this.service.findAllHospitals().subscribe(data => this.hospitalList = data);
  }

  ngAfterViewInit(): void {
    this.ratings = this.feeback.getBestReview();
    this.reviews = this.feeback.getLatestReviews();
    this.detector.detectChanges();
  }

}
