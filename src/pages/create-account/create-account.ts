import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentServiceProvider } from '../../providers/student-service/student-service';


/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  public createAccountForm;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private studentProvider: StudentServiceProvider,
    private loading :LoadingController) {
    this.createAccountForm = formBuilder.group({
      name: ['', Validators.required],
      app: ['', Validators.required],
      apm: [''],
      email: ['', [Validators.required, Validators.email]],
      matricula: ['', Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  createAccount() {
    let loadingState = this.loading.create({
      content:"Espere"
    })
    loadingState.present();
    let accountInfo = this.createAccountForm.getRawValue();
    this.studentProvider
      .createStudentAccount(accountInfo)
      .subscribe( data => {
        this.navCtrl.pop();
      },erro => {
        loadingState.dismiss();
      }, () => {
        console.log();
        loadingState.dismiss();
      });


  }

}
