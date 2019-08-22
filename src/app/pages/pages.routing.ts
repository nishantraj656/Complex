import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

import { EmployeeComponent } from './employee/employee.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { ComplexDetailsComponent } from './complex-details/complex-details.component';
import { NotificationComponent } from './notification/notification.component';
import { VisitorComponent } from './visitor/visitor.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
   
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            // { path: '', redirectTo: 'index', pathMatch: 'full' },
            // { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'employee', loadChildren:'./employee/employee.module#EmployeeModule' },
            { path: 'owner', loadChildren:'./flat-owner/flat-owner.module#FlatOwnerModule' },
           
            { path: 'maintenances', component: MaintenancesComponent },
            { path: 'complex', component: ComplexDetailsComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'visitor', component: VisitorComponent },
           
           
            // { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },component:EmployeeComponent
            // { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            // { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            // { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            // { path: 'form', loadChildren: './form/form.module#FormModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            // { path: 'table', loadChildren: './table/table.module#TableModule' },
            // { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
