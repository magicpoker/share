import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public users: Array<User>=[];
  constructor() { }

  ngOnInit() {
    this.users=[
      {
        name:"spring",
        position:"Module Design Engineer",
        description:"The magician changes everything, but the heart doesn't change",
        head:"B001"
      },
      {
        name:"唐见英",
        position:"Front Engineer",
        description:"everything is possible",
        head:"G001"
      },
      {
        name:"钟炳奇",
        position:"Front Engineer",
        description:"The magician changes everything, but the heart doesn't change asdasd gsdgsdgaad aff",
        head:"B034"
      },
      {
        name:"李思梦",
        position:"Front Engineer",
        description:"The magician changes everything, but the heart doesn't change",
        head:"B023"
      },
      {
        name:"陈光冉",
        position:"Front Engineer",
        description:"The magician changes everything, but the heart doesn't change",
        head:"B043"
      }]
  }

}
