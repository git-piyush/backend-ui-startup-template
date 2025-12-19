import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
  const aurhService = inject(AuthService);
    if(aurhService.isAuthenticated()){
        return true;
    }
  router.navigateByUrl("/auth/login");
  return false;
};
