import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { AuthGuard } from './_guards/auth.guard';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Magma' }
];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  isLogged: boolean = false;

  constructor(private authGuard: AuthGuard) {
    this.isLogged = this.authGuard.isLogged();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
