import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.components';
import { AboutComponent }  from './components/about.components';
import { MovieComponent } from './components/movies/movie.components';
import { AuthComponent } from './components/auth/auth.components';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, MovieComponent, AuthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
