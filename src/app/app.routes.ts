import { Routes } from '@angular/router';
// import { LoginComponent } from './componentes/login/login.component';
// import { RegistroComponent } from './componentes/registro/registro.component';
// import { HomeComponent } from './componentes/home/home.component';

// export const routes: Routes = [
//   {
//     path: 'login', 
//     component: LoginComponent
//   },
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
//   {
//     path: 'registro', 
//     component: RegistroComponent
//   },
//   {
//     path: 'home', 
//     component: HomeComponent
//   }

  
// ];
export const routes: Routes = [
  {
    path: 'login', 
    loadComponent: () => import('./componentes/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro', 
    loadComponent: () => import('./componentes/registro/registro.component').then(m => m.RegistroComponent)
  },
  {
    path: 'home', 
    loadComponent: () => import('./componentes/home/home.component').then(m => m.HomeComponent)
  }
];
