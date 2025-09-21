import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, 

  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
  },

  { 
    path: 'register', 
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) 
  },

  { 
    path: 'view', 
    loadComponent: () => import('./pages/view/view.component').then(m => m.ViewComponent) 
  },
  { 
    path: 'view2', 
    loadComponent: () => import('./pages/view2/view2.component').then(m => m.View2Component) 
  },
  { 
    path: 'view3', 
    loadComponent: () => import('./pages/view3/view3.component').then(m => m.View3Component) 
  },
  { 
    path: 'paystuff', 
    loadComponent: () => import('./pages/paystuff/paystuff.component').then(m => m.PaystuffComponent) 
  },
];
