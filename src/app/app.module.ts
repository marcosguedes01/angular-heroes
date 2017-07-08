import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroesdetails/hero.detail.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeroesComponent]
})
export class AppModule { }
