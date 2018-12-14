import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompInteractionService {

  currentStatus: BehaviorSubject<String> = new BehaviorSubject('');
  constructor() { }

  changeCurrentStatus(msg: string): void {
    this.currentStatus.next(msg);
  }
}
