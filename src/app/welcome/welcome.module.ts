import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './component/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WelcomeComponent],
  exports:[WelcomeComponent]
})
export class WelcomeModule { }
