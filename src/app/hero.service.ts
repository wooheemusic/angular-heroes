import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {


  constructor(private messageService: MessageService) {
  // constructor() {
    console.log("HeroeService contructor");
    console.log("HeroeService contructor, messageService", messageService);
  }

  // synchronous
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getMessageService(): MessageService { // if [], TS1122
    return this.messageService;
  }

  //asynchronous
  getHeroes(): Observable<Hero[]> {
    console.log("HeroService getHeroes");
    this.messageService.add('HeroService: fetched heroes');
    this.messageService.add('test');
    return of(HEROES);
  }

}
