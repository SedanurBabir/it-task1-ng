import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User
  currentPostId:number;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.userService.getUsers().subscribe(response =>{
      this.user = response[0]
    })
  }

  setCurrentPostId(postId:number){
    this.currentPostId = postId;
    console.log(postId)
  }
}
