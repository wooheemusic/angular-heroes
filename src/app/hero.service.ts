import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient, private messageService: MessageService) {
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

  //asynchronous : RxJS
  // getHeroes(): Observable<Hero[]> {
  //   console.log("HeroService getHeroes");
  //   this.log('fetched heroes');
  //   //this.messageService.add('test');
  //   return of(HEROES);
  // }

  //asynchronous : InMemoryDataService
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
    // In general, an Observable can return multiple values over time. An Observable from HttpClient always emits a single value and then completes, never to emit again.
    // HttpClient.get returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, <Hero[]> , gives you a typed result object.
    // typed result??????? how do TypeScript and Angular co-work? // i have thought TypeScript is independent of Angular as a pre-filter, but now it seems like angular api reads types.
    // (tested result) virtually, instances do not have any user-defined type. Angular does not create an object with a type. TypeScript is just a pre-filter.
  }

  // getHero(id: number): Observable<Hero> {
  //   // Todo: send the message _after_ fetching the hero
  //   this.log(`fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) { // ? means optional.
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log("HeroService handleError, operation", operation);
      console.log("HeroService handleError, result", result);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.status}`);

      // ???????? i can do something with result here and subscribe it later??? or any different senario?????

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
