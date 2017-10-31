import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user.model";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userInfo: User={};
  @Input() set user(value: User){
    this.userInfo=value;
  }
  constructor() { }

  ngOnInit() {
  }

}
