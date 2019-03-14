import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CostumerPage } from '../pages/costumer/costumer';
import { PipesModule } from '../pipes/pipes.module';
import { LoginPage } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { LoginProviderMock } from '../mock/loginProviderMock';
import { EventManagerProvider } from '../providers/event-manager/event-manager';
import { CardComponent } from '../components/card/card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CostumerPage,
    LoginPage,
    CreateAccountPage,
    CardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CostumerPage,
    LoginPage,
    CreateAccountPage,
    CardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider,
    {
      provide:LoginServiceProvider,
      useClass:LoginServiceProvider
    },
    EventManagerProvider,
    EventManagerProvider
  ]
})
export class AppModule {}
