import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DeviceMotion } from '@ionic-native/device-motion/ngx';

export const firebaseConfig = {
  apiKey: "344f5ab65826e8fd39c62f41a180d176eff7cfbe",
  authDomain: "test133-3fcc2.firebaseapp.com",
  databaseURL: "https://test133-3fcc2.firebaseio.com",
  projectId: "test133-3fcc2",
  storageBucket: "test133-3fcc2.appspot.com",
  messagingSenderId: "909242581340"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFirestoreModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
