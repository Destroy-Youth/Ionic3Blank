import { Component } from '@angular/core';
import { Platform, Loading, LoadingController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { EventManagerProvider } from '../providers/event-manager/event-manager';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  loading: Loading;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    loadingController: LoadingController,
    toastController: ToastController,
    eventManager: EventManagerProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      eventManager.getIsLoading()
        .subscribe((isLoading) => {
          if (isLoading) {
            this.loading = loadingController.create({
              content: "Espere"
            });
            this.loading.present();
          } else {
            this.loading.dismiss();
          }
        });

      eventManager.getMsgToast().subscribe((msg) => {
        toastController.create({
          message: msg,
          duration: 5000
        }).present();
      });



  });
}
}

