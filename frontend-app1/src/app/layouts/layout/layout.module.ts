import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
        UserComponent,
        TablesComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    RouterModule,
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
        FormsModule,
        LbdModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ]
})
export class LayoutModule { }
