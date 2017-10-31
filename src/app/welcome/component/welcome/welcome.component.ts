///<reference path="../../../../../node_modules/@types/jquery/index.d.ts"/>
import {Component, OnInit, Input, Output, EventEmitter, AfterContentInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit,AfterContentInit {
  @ViewChild("particles")
  private particles: ElementRef;
  @Output()
  private toCenter=new EventEmitter();

  constructor(public el: ElementRef) { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    $("html").height("100%");
    $("body").height("100%");
    $((this.particles.nativeElement as HTMLElement)).height($("body").height());
    ($('#particles') as any).particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
  }

  public goToCenter(){
    this.toCenter.emit();
  }


}
