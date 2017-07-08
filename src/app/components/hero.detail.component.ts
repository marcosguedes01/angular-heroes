import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
    selector:'hero-detail',
    templateUrl: '../hero-detail/hero.detail.component.html',
    styleUrls: ['../hero-detail/hero.detail.component.css']
})

export class HeroDetailComponent
{
    @Input() hero: Hero;
}