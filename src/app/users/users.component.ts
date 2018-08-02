import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res=>{
      this.users=res.body;
    })
  }

}
