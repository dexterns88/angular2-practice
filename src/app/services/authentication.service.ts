import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {

    constructor(private http: Http) {}

    login(username: string, password: string) {

        // console.log( JSON.stringify({ username: username, password: password} );

        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password}))
            .map((response: Response) => {
                // Login succesful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user datails and jwt token in local storage to keep user logged in between page refreshes
                    //
                    // console.log( JSON.stringify(user) );

                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
