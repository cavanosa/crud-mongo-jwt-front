import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.tokenService.isLogged()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
  
}
