// import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // this is required if a component has this component as a sub-component.
  // like <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  //@Input() hero: Hero;

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log("HeroDetailComponent ngOnInit");
    this.getHero();
  }

  getHero(): void {
    const snapshot = this.route.snapshot;
    console.log("HeroDetailComponent snapshot", snapshot);
    const id = +snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        //console.log("HeroDetailComponent, hero", hero);
        //console.log("HeroDetailComponent, hero instanceof Hero", hero instanceof Hero, Hero); // false and Hero is a empty function!!!!!
      });
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe((...x) => {
        console.log("HeroDetailComponent save, x");
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back(); // how can i test the nomalization behavior?
    // history.back();
  }


}
