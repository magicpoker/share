import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { ViewModule } from './common/view.module';
import { MoodWallModule } from './mood_wall/mood_wall.module';
import { TeamModule } from './team/team.module';
import { IndexComponent } from './app_content/component/index/index.component';
import { MenuComponent } from './app_content/component/index/menu/menu.component';
import { ContentComponent } from './app_content/component/index/content/content.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/mood',pathMatch: 'full' },
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
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    MoodWallModule,
    ViewModule,
    TeamModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
