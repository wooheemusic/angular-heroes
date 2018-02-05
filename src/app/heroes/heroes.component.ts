import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(...data) {
    //console.log("ngOnInit args :", data);
    console.log("Heroes Component ngOnInit");
    this.getHeroes();
  }

  private onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // synchronous signature
  //   getHeroes(): void {
  // this.heroes = this.heroService.getHeroes();
  // }

  // asynchronous signature
  getHeroes(): void {
    console.log("this.heroService", this.heroService);
    const heroObservable = this.heroService.getHeroes();
    console.log("heroObservable = this.heroService.getHeroes()", heroObservable);
    heroObservable.subscribe(heroes => this.heroes = heroes);
  }
}
