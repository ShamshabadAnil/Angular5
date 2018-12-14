import { Component, OnInit, Input } from '@angular/core';
import { CompInteractionService } from '../comp-interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() linkList: string;
  // @Input() logo: string;
  showLogin = true;
  showLogout = false;
  constructor(private compInteractionService: CompInteractionService) { }

  ngOnInit() {
    this.compInteractionService.currentStatus.subscribe(msg => {
      if (msg === 'logged') {
          this.showLogin = false;
          this.showLogout = true;
      }
    });
  }

}
