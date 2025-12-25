import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/admin/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/admin/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    { path: '/admin/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/admin/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/admin/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/admin/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/admin/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' }
];

export const ROUTES1: RouteInfo[] = [
    { path: '/user/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/admin/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/admin/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    { path: '/admin/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/admin/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/admin/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/admin/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/admin/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  menuItems1: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems1 = ROUTES1.filter(menuItem => menuItem);
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isMobileMenu() {
      console.log('isMobileMenu');
      if ($(window).width() > 991) {
        
          return false;
      }
      return true;
  };
}
