import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users/User';
import { Email } from './send-mail/Email';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>("https://kizuzikmail.herokuapp.com/users",{observe:"response"});
  }

  sendMail(email:Email){
    return this.http.post("https://kizuzikmail.herokuapp.com/emails/send",email, {observe:"response"})
  }
}
