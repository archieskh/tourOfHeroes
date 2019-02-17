import { HeroService } from './services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[]; 
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Andrew'
  // }
}


