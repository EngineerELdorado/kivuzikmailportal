import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Email } from '../send-mail/Email';
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  myForm:FormGroup
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      title:new FormControl('', Validators.required),
      body:new FormControl('', Validators.required)
    })
  }

  onChange(){

  }

  send(form:FormGroup){
    if(form.valid){
      this.userService.sendMail({
        title:form.value.title,
        body:form.value.body
      }).subscribe(res=>{
        console.log(res)
      })
    }
    else{
      alert("Ces champs sont obligatoires")
    }
  }

}
