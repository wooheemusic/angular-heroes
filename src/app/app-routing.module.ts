import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule as yyy, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// You generally don't declare components in a routing module so you can delete the @NgModule.declarations array and delete CommonModule references too.
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

console.log(yyy);
console.log(yyy.forRoot);

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [yyy.forRoot(routes)],
  exports: [yyy]
})

export class AppRoutingModuleX {
  constructor() {
    console.log("AppRoutingModule constructor");
  }

}
