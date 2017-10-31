import { Component, OnInit } from '@angular/core';

interface Label{
  name?:string,
  date?:Date,
  content?:string,
  user?:string,
  position:number
}
@Component({
  selector: 'mood-wall',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public labels: Array<Label>;
  public dialogOption={};
  constructor() { }

  ngOnInit() {
    this.labels=[
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:0},
      {name:"jy",date:new Date(),content:"123",user:"人行",position:1}
    ]
  }

  addLabel(event: MouseEvent){
    this.dialogOption={
      show:true
    }
    event.stopPropagation();
  }

}
