import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CostumerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-costumer',
  templateUrl: 'costumer.html',
})
export class CostumerPage {

  data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostumerPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  closeSesion(){
    this.navCtrl.popToRoot();
  }

}
