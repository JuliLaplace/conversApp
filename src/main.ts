import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { IonicModule } from '@ionic/angular';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    importProvidersFrom(IonicModule.forRoot({animated: false})),
    provideFirebaseApp(
      () => initializeApp(
        {
          "projectId":"app-sakura",
          "appId":"1:90830908122:web:d2e6efc7900131526c93e3",
          "storageBucket":"app-sakura.appspot.com",
          "apiKey":"AIzaSyDpwhiEL45aK6IPqAuSwIFEMjkv3qx84qw",
          "authDomain":"app-sakura.firebaseapp.com",
          "messagingSenderId":"90830908122"

        })
    ), 
    provideAuth(
      () => getAuth()
    ), 
    provideFirestore(
      () => getFirestore()
    ),
  ],
});
