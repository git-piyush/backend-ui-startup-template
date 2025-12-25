import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  }, {
    path: '',
    component: LayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/layout/layout.module').then(x => x.LayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
