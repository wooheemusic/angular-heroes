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
  // selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log("HeroesComponent constructor");
  }

  ngOnInit(...data) {
    //console.log("ngOnInit args :", data);
    console.log("HeroesComponent ngOnInit");
    this.getHeroes();

    // // TEST : property change detection
    // // i guess angular has a trick on setters
    // // test this with (click)="onSelect(hero)" omitted.
    // setTimeout((function() {
    //
    //   // case 1 : prevent any api from changing the setter property.
    //   let x = undefined;
    //   Object.defineProperty(this, 'selectedHero', {
    //     enumerable: true,
    //     configurable: false, // ?????????????????????????? weird. configurable is always true.
    //     set: function(a) {
    //       x = a;
    //     },
    //     get: function() { return x; }
    //   });
    //
    //   this.selectedHero = this.heroes[5];
    //   console.log(this);
    //   console.log(Object.getOwnPropertyDescriptor(this, "selectedHero"));
    //   console.log(Object.getOwnPropertyDescriptor(this, "selectedHero").set); //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
    //   console.log(Object.getOwnPropertyDescriptor(this, "selectedHero").get);
    //
    //   //case2. test this with test1 not omitted
    //   var y = undefined;
    //   Object.defineProperty(this.selectedHero, 'name', {
    //     enumerable: true,
    //     configurable: false,
    //     set: function(a) {
    //       y = a;
    //     },
    //     get: function() { return y; }
    //   });
    //   console.log(Object.getOwnPropertyDescriptor(this.selectedHero, "name"));
    //   console.log(Object.getOwnPropertyDescriptor(this.selectedHero, "name").set);
    //   console.log(Object.getOwnPropertyDescriptor(this.selectedHero, "name").get);
    //
    //   // https://auth0.com/blog/understanding-angular-2-change-detection/
    //   // Angular is notified about the change from some component and has to check how that affects the current state,
    //   // so it checks all the values for the change. Actually, the team says it can make thousands of such checks in milliseconds,
    //   // but it's still a waste of time and can even harm our big data-driven application.
    //
    //
    // }).bind(this), 1000);
    //
    // // RESULT : (unsolved);

  }

  // private onSelect(hero: Hero): void {
  //   console.log("HerosComponent onSelect, hero", hero);
  //   this.selectedHero = hero;
  // }

  // synchronous signature
  //   getHeroes(): void {
  // this.heroes = this.heroService.getHeroes();
  // }

  // asynchronous signature
  // getHeroes(): void {
  //   console.log("HeroesComponent getHeroes");
  //   console.log("HeroesComponent getHeroes, this.heroService.getMessageService()", this.heroService.getMessageService());
  //   const heroObservable = this.heroService.getHeroes();
  //   console.log("HeroesComponent getHeroes, this.heroService.getMessageService()", this.heroService.getMessageService());
  //   //console.log("HeroesComponent getHeroes, this.heroService.messageService", this.heroService.messageService); // if i excute 'ng serve' again, it returns TS2341
  //   console.log("HeroesComponent getHeroes heroObservable = this.heroService.getHeroes()", heroObservable);
  //   console.log("heroObservable.subscribe", heroObservable.subscribe);
  //   //console.log("heroObservable._subscribe", heroObservable._subscribe); // TS2445
  //   //heroObservable.subscribe(heroes => this.heroes = heroes);
  //
  //   // test : does an undefined property violates the angular activity for *ngFor.
  //   console.log("HeroesComponent, heroes in this now???", this.heroes); // false...
  //   setTimeout(()=> heroObservable.subscribe(heroes => this.heroes = heroes), 1000);
  //   // result : *ngIf is not required. *ngFor resolves the invalid status of the target.
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
