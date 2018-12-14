import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() name: String;
  constructor() {
    // alert('Child Contructor called');
    console.log('Child Contructor called');
  }

  ngOnInit() {
    // alert('Child INIT called');
    console.log('Child INIT called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // alert('Child Onchange called ***');
    console.log('Child Onchange called ***');

    console.log(changes);
    console.log(changes.name.currentValue);
    console.log(changes.name.previousValue);
  }

  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit() called ***');
  }
}
