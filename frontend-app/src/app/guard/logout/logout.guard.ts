import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


export const logoutGuard: CanActivateFn = (route, state) => {
      const router = inject(Router);
      const authService = inject(AuthService);
        authService.clearAuth();
      //router.navigateByUrl("/login");
      return true;
};
