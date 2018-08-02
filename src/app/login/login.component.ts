import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;
  wrong:boolean;
  constructor(private router: Router) { }

  ngOnInit() {

    this.myForm= new FormGroup({
      username:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    })
  }

  login(form:FormGroup){

    if(this.myForm.value.username==="admin" && this.myForm.value.password==="admin")
    {
      this.router.navigate(['/users'])
    }
    else{
      alert("Wrong Username or password");
    }
  }

  onChange(){

  }

}
