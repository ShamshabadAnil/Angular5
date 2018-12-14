import { Component, OnInit, OnChanges,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {

  constructor() {
    alert('Parent Constructor initialized ***');
    console.log('Parent Constructor initialized ***');
  }

  ngOnInit() {
    alert('Parent INIT initialized ***');
    console.log('Parent INIT initialized ***');
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('Parent Onchange called ***');
    console.log('Parent Onchange called ***');
  }

}
