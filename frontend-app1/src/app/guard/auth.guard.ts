import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService){}
  router = inject(Router);

    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    //alert('Auth Guard');
    if(!this.authservice.isAuthenticated){
      this.router.navigate(['/login'])
     // this.snackbar.open("You don't have access to this page","Close", { duration: 5000 })
      //return false;
    }
    return true;
  }
  
}
