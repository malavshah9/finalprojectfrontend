//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/rx';
import { User_Class } from "./user_class";


/*
  Generated class for the UserlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserlogProvider {

  constructor(public http: Http) {
    console.log('Hello UserlogProvider Provider');
  }
  public url_login:string="http://localhost:3000/login/";
  public url_signup:string="http://localhost:3000/signup/";
  Login(user:User_Class) {
  
    let body = JSON.stringify(user);
    //console.log(body);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
    
   return this.http.post(this.url_login,body,ro)
   .map((res:Response) => res.json());
  }
  addUser(user){
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_signup, body, ro).map((res) => res.json());
  }

}