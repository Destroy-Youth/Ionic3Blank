import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student.model';
import { CREATE_USER, GET_USERS, DELETE_USER } from '../../endpoints/enpoints';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentServiceProvider Provider');
    
  }

  createStudentAccount(account : Student){
    return this.http.post(CREATE_USER,account);
  }

  getStudentsAccounts(){
    return this.http.get(GET_USERS);
  }

  deleteStudentAccount(id : Int16Array){
    return this.http.delete(`${DELETE_USER}${id}`)
  } 

}
