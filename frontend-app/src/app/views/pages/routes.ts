import { Routes } from '@angular/router';
import { authGuard } from '../../guard/auth.guard';
import { logoutGuard } from '../../guard/logout/logout.guard';


export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),canActivate:[logoutGuard], data: {
    title: 'Login'
    }
  },
  {
    path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent), data: {
    title: 'Register'
    }
  },
  {
    path: 'profiledetails', loadComponent: () => import('./profiledetails/profiledetails.component').then(m => m.ProfiledetailsComponent), data: {
    title: 'Profile'
    }
  }
];
