import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CostumerPage } from '../costumer/costumer';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user;
  group;
  data;
  money: any;
  cosas = ["cosa1",
    "muerte a Decsef",
    "uwu"];

  constructor(public navCtrl: NavController) {
  }

  fillData(){
    this.data = {
      user: this.user,
      group: this.group,
      cosas: this.cosas,
      money: this.money,
      date: new Date
    }
  }

  goAbout() {
    this.fillData();
  
    this.navCtrl.push(AboutPage, this.data);
  }


  goCostumer() {
    this.fillData();
    this.navCtrl.push(CostumerPage,this.data);
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

}
