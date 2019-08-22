import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { EmployeeComponent } from './employee/employee.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { VisitorComponent } from './visitor/visitor.component';
import { NotificationComponent } from './notification/notification.component';
import { ComplexDetailsComponent } from './complex-details/complex-details.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent,
       MaintenancesComponent,
       VisitorComponent,
       NotificationComponent,
       ComplexDetailsComponent

    ]
})
export class PagesModule { }
