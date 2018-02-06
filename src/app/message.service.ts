import { Injectable } from '@angular/core';
import { HeroService } from './hero.service'

@Injectable()
export class MessageService {
  messages: string[] = [];

  // constructor(private heroService : HeroService){
  constructor(){
    console.log("MessageService constructor");
  }

  add(message: string) {
    console.log("MessageService add, message ", message)
    this.messages.push(message);
  }

  clear() {
    console.log("MessageService clear")
    this.messages = [];
  }
}
