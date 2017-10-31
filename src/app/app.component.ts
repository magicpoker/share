import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public welcomeOptions={
    show:true
  };
  public  indexOptions={
    show:false
  }
  constructor(){

  }

  ngOnInit(){
  }

  public toCenter(){
    this.welcomeOptions={
      show:false
    };
    this.indexOptions={
      show:true
    }
  }
}
