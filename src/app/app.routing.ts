import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.components';
import {AboutComponent} from './components/about/about.components';
import {MovieComponent} from './components/movies/movie.components';
import {DiceComponent} from './components/dice/dice.component';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/index';
import { AuthGuard } from './_guards/index';
import { PageNotFoundComponent } from './components/error/PageNotFoundComponent';
import { EditComponent } from './components/register/edit.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'movie',
        component: MovieComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dice',
        component: DiceComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/edit/:id',
        component: EditComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
