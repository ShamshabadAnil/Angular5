import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowlocationComponent } from '../showlocation/showlocation.component';

@Component({
  selector: 'app-searchhospital',
  templateUrl: './searchhospital.component.html',
  styleUrls: ['./searchhospital.component.css']
})
export class SearchhospitalComponent implements OnInit {

  @ViewChild('locationRef', {read: ViewContainerRef}) viewRef: ViewContainerRef;

  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  show() {
    this.service.setViewRef(this.viewRef);
    this.service.addComponent(ShowlocationComponent);
  }

}
