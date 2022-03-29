import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Component({
  selector: 'cm-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo!: UserInfo;

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    console.log("Sending request to server...");
    this.getUserInfo();
    console.log("Registering showUserInfo as a subscriber");
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<UserInfo>('https://cool-math-e891e-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
