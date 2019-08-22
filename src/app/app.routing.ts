import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component:LoginComponent ,
  },
  {
    path: 'pages',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },
  {
    path: 'Admin',
    redirectTo: 'Admin/main',
    pathMatch: 'full'
   
  },
  { 
    path: '**',
    redirectTo: 'pages/index'
  },
 
];

export const routing = RouterModule.forRoot(appRoutes);
