import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const childRoutes: Routes = [
    {
        path:'show',
        component:EmployeeShowComponent
    },
    {
        path:'new',
        component:EmployeeFormComponent
    },

    {
        path:'',
        component: EmployeeComponent,
        
    },
   
   
];

export const routing = RouterModule.forChild(childRoutes);
