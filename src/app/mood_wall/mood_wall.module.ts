import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewModule} from "../common/view.module"
import { MainComponent } from './component/main/main.component';
import { LabelComponent } from './component/label/label.component';
import { AddComponent } from './component/add/add.component';
const appRoutes: Routes = [
  { path: 'mood', component: MainComponent },
//  { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    CommonModule,
    ViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [MainComponent, LabelComponent, AddComponent]
})
export class MoodWallModule { }
