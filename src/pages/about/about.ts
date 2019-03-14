import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentServiceProvider } from '../../providers/student-service/student-service';
import { Student } from '../../model/student.model';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  public user: String;
  public group: String;
  public cosas;
  public date;
  public money;
  public data;
  colorLabel: String;

  students: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eventManager: EventManagerProvider,
    public studentService: StudentServiceProvider) {
    let params = navParams.data;
    console.log(params);
    this.data = params;
    this.user = params.user;
    this.date = params.date;
    this.money = params.money;

    this.getStudentsAccounts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goCustomer() {
    this.colorLabel = "primary";
  }

  getStudentsAccounts(){
    this.studentService.getStudentsAccounts()
      .subscribe(result => {
        this.students = result;
        console.log(this.students);
      }, error => {
        console.log();

      });
  }

  deleteCard(student: Student) {
    this.eventManager.setIsLoading(true);
    console.log(student);
    this.studentService.deleteStudentAccount(student.id)
      .subscribe(() => {
        this.eventManager.setIsLoading(false);
        this.eventManager.setMsgToast(`El estudiante ${student.name} ha sido borrado`);
        this.students = this.students.filter( item => student.id != item.id);
      }, error => {
        this.eventManager.setIsLoading(false);
        this.eventManager.setMsgToast(`El estudiante ${student.name} no ha podido ser borrado`);
        this.students = this.students.filter( item => student.id != item.id);
      });
  }

}
