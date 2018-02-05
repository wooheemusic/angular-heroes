import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() {
    console.log("HeroeService contructed");
  }

  // synchronous
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //asynchronous
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
