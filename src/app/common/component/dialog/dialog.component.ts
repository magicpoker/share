import {Component, ElementRef, Input, OnInit, ViewChild, ViewRef} from '@angular/core';
import {AnimateService} from "../../service/animate.service";
interface DialogOption{
  show?: boolean;
  animateIn?: string;
  animateOut?: string;
  animateInFlag?: boolean;
  animateOutFlag?: boolean;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  // host:{
  //   '(body:click)': 'clickOther()'
  // }
})
export class DialogComponent implements OnInit {
  public dialog: DialogOption={
    show:false
  };
  public animateIn: string="";
  public animateOut: string="";
  public close: boolean=false;
  @Input() set option(value){
    this.animateIn="";
    this.animateOut="";
    if(value.show){
      this.dialog={
        show:true
      }
      this.animateIn=this.animateService.getAnimateIn();
    }
    setTimeout(()=>{
      this.setHeight();
    },100)

  }
  constructor(public animateService: AnimateService,
              public el: ElementRef) { }

  ngOnInit() {
  }

  setHeight(){
    $("body").height($(".modal-div").height());
    $("body").css("overflow","hidden")
  }
  closeDialog(){
    this.animateIn="";
    this.animateOut=this.animateService.getAnimateOut();
    setTimeout(()=>{
      this.dialog={
        show:false
      }
      $("body").css("overflow","auto")
    },1000)

  }
}
