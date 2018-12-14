import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalguardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let allow = false;
      const userStatus = sessionStorage.getItem('status');

      if (userStatus === 'logged') {
          allow = true;
      }
      return allow;
  }
}
