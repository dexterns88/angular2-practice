import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.components';
import { AboutComponent }  from './components/about/about.components';
import { MovieComponent } from './components/movies/movie.components';
import { AuthComponent } from './components/auth/auth.components';
import { PagerComponent } from './components/pager/pager.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { DiceComponent } from './components/dice/dice.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/register/edit.component';
import { PageNotFoundComponent } from './components/error/PageNotFoundComponent';


import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    MovieComponent,
    AuthComponent,
    PagerComponent,
    HeroDetailComponent,
    DiceComponent,
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    EditComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
