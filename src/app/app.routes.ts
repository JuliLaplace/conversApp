import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
];
