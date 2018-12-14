import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() name: String;
  constructor() {
    alert('Child Contructor called');
    console.log('Child Contructor called');
  }

  ngOnInit() {
    alert('Child INIT called');
    console.log('Child INIT called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('Child Onchange called ***');
    console.log('Child Onchange called ***');
  }
}
