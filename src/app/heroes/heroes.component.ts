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

  constructor(private heroService: HeroService) {
    console.log("HeroesComponent constructor");
  }

  ngOnInit(...data) {
    //console.log("ngOnInit args :", data);
    console.log("HeroesComponent ngOnInit");
    this.getHeroes();

    // test this with (click)="onSelect(hero)" omitted.

    setTimeout((function() {

      let x = undefined;
      Object.defineProperty(this, 'selectHero', {
        enumerable: true,
        configurable: false,
        set: function(a) {
          x = a;
        },
        get: function() { return x; }
      });

      this.selectedHero = this.heroes[5];
      console.log(this);
      console.log(Object.getOwnPropertyDescriptor(this, "selectedHero"));
      console.log(Object.getOwnPropertyDescriptor(this, "selectedHero").set); //undefined //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
    }).bind(this), 1000);

    // how does angluar catch the event of value assginment. how do i see setter.


  }

  private onSelect(hero: Hero): void {
    console.log("HerosComponent onSelect, hero", hero);
    this.selectedHero = hero;
  }

  // synchronous signature
  //   getHeroes(): void {
  // this.heroes = this.heroService.getHeroes();
  // }

  // asynchronous signature
  getHeroes(): void {
    console.log("HeroesComponent getHeroes");
    console.log("HeroesComponent getHeroes, this.heroService.getMessageService()", this.heroService.getMessageService());
    const heroObservable = this.heroService.getHeroes();
    console.log("HeroesComponent getHeroes, this.heroService.getMessageService()", this.heroService.getMessageService());
    //console.log("HeroesComponent getHeroes, this.heroService.messageService", this.heroService.messageService); // if i excute 'ng serve' again, it returns TS2341
    console.log("HeroesComponent getHeroes heroObservable = this.heroService.getHeroes()", heroObservable);
    console.log("heroObservable.subscribe", heroObservable.subscribe);
    //console.log("heroObservable._subscribe", heroObservable._subscribe); // TS2445
    heroObservable.subscribe(heroes => this.heroes = heroes);
  }
}
