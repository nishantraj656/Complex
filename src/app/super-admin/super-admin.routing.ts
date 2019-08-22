import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {path:'Admin',component:MainComponent,
  children:[
      
  ]
}  
];

export const routing = RouterModule.forRoot(appRoutes);
