import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( localStorage.getItem('currentUser') ) {
            // logedin so return true
            return true;
        }

        // not loged in so redirect to login page with the return url
        this.router.navigate(['/login'], {queryParams : {returnUrl: state.url}});
        return false;
    }

    isLogged() {
        return !!localStorage.getItem('currentUser');

        // return localStorage.getItem('currentUser') ? true : false;
        // if ( localStorage.getItem('currentUser') ) {
        //     return true;
        // } else {
        //     return false;
        // }
    }
}
