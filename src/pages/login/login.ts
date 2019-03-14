import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { AboutPage } from '../about/about';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  username = 'a@i.com';
  password = '123';

  loginData;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private eventManager : EventManagerProvider,
    private loginService: LoginServiceProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    let username = this.loginForm.value.username;
    let pwd = this.loginForm.value.password;

    console.log(username,pwd);
    
    this.eventManager.setIsLoading(true);
    this.loginService.login(
      username,
      pwd)
      .subscribe( data => {
        console.log(data);
        this.loginData = data;
        this.navCtrl.push(AboutPage, this.loginData);
      },erro => {
        this.eventManager.setIsLoading(false);
        this.eventManager.setMsgToast(`Mamaste: ${erro.error.message}`);
      }, () => {
        console.log();
        this.eventManager.setIsLoading(false);
      });
  }

  goCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

}
