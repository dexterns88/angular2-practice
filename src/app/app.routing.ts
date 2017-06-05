import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.components';
import {AboutComponent} from './components/about.components';
import {MovieComponent} from './components/movies/movie.components';
import {AuthComponent} from './components/auth/auth.components';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'movie',
        component: MovieComponent
    },
    {
        path: 'login',
        component: AuthComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
