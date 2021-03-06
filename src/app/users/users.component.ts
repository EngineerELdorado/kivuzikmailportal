import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UsersService } from '../users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  canShow:boolean;
  constructor(private userService:UsersService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.userService.getUsers().subscribe(res=>{
      this.spinner.hide();
      this.users=res.body;
      this.canShow=true;
    },(err:HttpErrorResponse)=>{
      this.spinner.hide();
      alert(err.error)
    })
  }

}
