import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';

export const LayoutRoutes: Routes = [
    { path: '',component: HomeComponent },
    { path: 'admin/dashboard',component: HomeComponent },
    { path: 'admin/user',           component: UserComponent },
    { path: 'admin/table',          component: TablesComponent },
    { path: 'admin/typography',     component: TypographyComponent },
    { path: 'admin/icons',          component: IconsComponent },
    { path: 'admin/maps',           component: MapsComponent },
    { path: 'admin/notifications',  component: NotificationsComponent },
    { path: 'admin/upgrade',        component: UpgradeComponent },
    { path: 'login',        component: LoginComponent },
];