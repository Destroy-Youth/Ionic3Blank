import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_USER } from '../../endpoints/enpoints';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(email : String, password : String){
    return this.http.post(LOGIN_USER,{
      email,
      password
    });
  }

}
