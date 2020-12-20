import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyAdminUsersGuard implements CanActivate {
  constructor(private token: JwtService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.token.getIsAuthenticated() &&
      this.token.getUserType() === 'admin'
    ) {
      return true;
    } else {
      this.token.resetToken();
      this.router.navigateByUrl('/login');
    }
  }
}
