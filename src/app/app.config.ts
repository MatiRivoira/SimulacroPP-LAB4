import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

//?Firebase Authentication
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDbEPE8P_Sl925JtIOkhWCpEHYgqfWw0-c",
  authDomain: "prueba1-f50d0.firebaseapp.com",
  projectId: "prueba1-f50d0",
  storageBucket: "prueba1-f50d0.appspot.com",
  messagingSenderId: "173018544772",
  appId: "1:173018544772:web:a4a8fa1671d35167a360d1"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      HttpClientModule,
      AngularFirestoreModule
    )
  ]
};
