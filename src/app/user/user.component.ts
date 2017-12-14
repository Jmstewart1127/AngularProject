import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = '';
  userNameDisplay = '';
  userNameNotEmpty = false;

  constructor() { }

  ngOnInit() {
  }

  onCreateUser() {
    if (this.userName !== '') {
      this.userNameNotEmpty = true;
      this.userNameDisplay = 'username: ' + this.userName;
    }
  }



}
