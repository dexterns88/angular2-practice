import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RestConfig } from '../_config/rest.config';

import { User } from '../_models/user';

@Injectable()

export class UserService {

    constructor(private http: Http) {}

    getAll() {
        // return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());

        let api = RestConfig.API_ENDPOINT + RestConfig.USER_API;

        let users = this.http.get('http://djs.loc/api/users', this.drupalAuth()).map((response: Response) => response.json());

        console.log( users );
        return users;
    }

    getById( id: number ) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create( user: User ) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update( user: User ) {
        return this.http.put('/api/users/' + user.uid, user, this.jwt()).map((response: Response) => response.json());
    }

    delete( id: number ) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // Private helper method
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( currentUser && currentUser.csrf_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.csrf_token });
            return new RequestOptions({ headers: headers });
        }
    }

    private drupalAuth() {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( currentUser && currentUser.csrf_token ) {
            let headers = new Headers({
                'Authorization': 'Basic ' + currentUser.auth,
                'X-CSRF-Token': currentUser.csrf_token
            });
            return new RequestOptions({ headers: headers });
        }
    }

}
