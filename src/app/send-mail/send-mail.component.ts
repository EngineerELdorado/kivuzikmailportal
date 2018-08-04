import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Email } from '../send-mail/Email';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  myForm:FormGroup;
  wrong:boolean;

  editorConfig: AngularEditorConfig = {
    editable: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
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
    console.log(form.value)
    if(form.valid){
     

      
      this.userService.sendMail({
        title:form.value.title,
        body:form.value.body
      }).subscribe(res=>{
        console.log(res)
      });
      form.reset();
    }
    else{
      alert("Ces champs sont obligatoires")
    }
  }

}
