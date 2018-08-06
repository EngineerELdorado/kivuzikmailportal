import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users/User';
import { Email } from './send-mail/Email';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "http://192.168.0.141:5050";
  //URL="https://kizuzikmail.herokuapp.com";

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.URL+"/users",{observe:"response"});
  }

  sendMail(email:Email){
    console.log(email)
    return this.http.post(this.URL+"/emails/sendMail",email, {observe:"response"})
  }
}
