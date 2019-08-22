import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

export const childRoutes: Routes = [

    
      
             { path: '', redirectTo: 'owner', pathMatch: 'full' },
            {
                path:'show',
                component:ShowComponent
            },
            {
                path:'new',
                component:FormComponent
            },
            {
                path:'owner',
                component:ListComponent
            },
   
];

export const routing = RouterModule.forChild(childRoutes);
