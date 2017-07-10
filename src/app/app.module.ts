import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from './components/heroesdetails/hero.detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from "./services/hero.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch: 'full'
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'heroes',
        component: HeroesComponent
      },
      {
        path:'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent    
  ],  
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
