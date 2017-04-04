import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SetFocuser } from "../components/set-focuser/set-focuser";
import { Keyboard } from '@ionic-native/keyboard';
import { MyEventPage } from "../pages/my-event/my-event";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetFocuser,
    MyEventPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Keyboard 
  ]
})
export class AppModule {}
