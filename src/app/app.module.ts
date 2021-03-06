import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app.routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mocks/in-memory-data.service';

import { AppComponent } from "./components/app/app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from './components/heroesdetails/hero.detail.component';
import { HeroesListComponent } from './components/heroeslist/heroes.list.component';
import { HeroSearchComponent } from './components/herosearch/hero-search.component';
import { HeroService } from "./services/hero.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesListComponent    ,
    HeroSearchComponent
  ],  
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
