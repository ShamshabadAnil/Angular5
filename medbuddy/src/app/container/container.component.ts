import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Hospitals } from '../hospitals';
import { MedbuddyAPIService } from '../medbuddy-api.service';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild(FeedbackComponent)feeback: FeedbackComponent;
  hospitalList: Hospitals[];
  constructor(private service: MedbuddyAPIService) { }

  ngOnInit() {
    this.service.findAllHospitals().subscribe(data => this.hospitalList = data);
  }



}
