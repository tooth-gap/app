import { Component } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  
  public users:User[];
  public userName:String;
  public userAge:Number;

  
  public userName_up:String;
  public userAge_up:Number;
  public tempData = new Array;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;

    });
  }
  addUser(){
    var user = new User();
    user.name = this.userName;
    user.age = this.userAge;
  
    this.userService.addUser(user)
    .subscribe((data) => {
      console.log(data);
      this.getUsers();
      // alert('Data Inserted!');
    });
  }
  getData(id){
    this.userService.getData(id).subscribe((data) => {
      this.tempData = data;
    });
  }
  updateUser(id){
    var user = new User();
    user.name = this.userName_up;
    user.age = this.userAge_up;

    this.userService.updateUser(user, id)
    .subscribe((data) => {
      console.log(data);
      this.getUsers();
    });
  }
  deleteUser(id){
    this.userService.deleteUser(id)
    .subscribe((data) => {
      console.log(data);
      this.getUsers();
    });
  }
}
