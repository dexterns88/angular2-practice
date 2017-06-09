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

        return this.http.post('http://djs.loc/user/login?_format=json', JSON.stringify({ name: username, pass: password}))
            .map((response: Response) => {
                // Login succesful if there's a jwt token in the response
                let user = response.json();

                if (user && user.csrf_token) {
                    // store user datails and jwt token in local storage to keep user logged in between page refreshes

                    // Format Drupal json for user
                    let dUser = user.current_user;
                    dUser['csrf_token'] = user.csrf_token;
                    dUser['logout_token'] = user.logout_token;
                    // encode username and password
                    dUser['auth'] = btoa( username + ':' + password);
                    localStorage.setItem('currentUser', JSON.stringify(dUser));
                }
            });

        // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password}))
        //     .map((response: Response) => {
        //         // Login succesful if there's a jwt token in the response
        //         let user = response.json();
        //         console.log( user );
        //         // if (user && user.token) {
        //         //     // store user datails and jwt token in local storage to keep user logged in between page refreshes
        //         //     //
        //         //     // console.log( JSON.stringify(user) );
        //         //
        //         //     localStorage.setItem('currentUser', JSON.stringify(user));
        //         // }
        //     });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

// Object { id: 5, username: "admin", firstName: "Dejan", lastName: "Dudukovic", token: "fake-jwt-token" }   authentication.service.js:41:13

// Object { current_user: Object, csrf_token: "T-bTwoOt3QSjbv1CiAbsjN-u25WqLFLWBNm…", logout_token: "aEz3giOQvkyzWwR6H41jfl8T4hScmJeTV3R…" }

// Drupal last
// Object { uid: "1", roles: Array[2], name: "admin", csrf_token: "sp09pUVnyFJGHEOkw-Pn1-_2m85QslKETiQ…", logout_token: "F6oXDoY81lvOaY57ho-H3b8EHpi5Xb5mq2w…" }