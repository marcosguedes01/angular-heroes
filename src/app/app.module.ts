import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
//import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from './components/heroesdetails/hero.detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from "./services/hero.service";

import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent    
  ],  
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
