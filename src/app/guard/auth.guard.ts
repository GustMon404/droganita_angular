import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, CanLoad } from '@angular/router';
import { resourceUsage } from 'process';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private route: Router){

  }

  verificarLogin(){

    if(this.authService.verificarLogin()){
      return true
    }

    this.route.navigate(['login'])
    return false

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.verificarLogin()
  }
  

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.verificarLogin()
  }
  
}
