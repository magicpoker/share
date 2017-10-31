import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './component/dialog/dialog.component';
import { AnimateService} from './service/animate.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent],
  exports:[DialogComponent],
  providers:[AnimateService]
})
export class ViewModule { }
