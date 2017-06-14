import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RestConfig } from '../_config/rest.config';

import { User } from '../_models/user';

@Injectable()

export class UserService {

    constructor(private http: Http) {}

    getAll() {
        let api = RestConfig.API_ENDPOINT + RestConfig.USERS_API;

        // let users = this.http.get('http://djs.loc/api/users', this.drupalAuth()).map((response: Response) => response.json());
        return this.http.get(api, this.drupalAuth())
            .map(res => res.json());
    }

    getById( id: number ) {
        let api = RestConfig.API_ENDPOINT + RestConfig.USER_API + '/' + id + '?_format=json';

        return this.http.get(api, this.drupalAuth()).map((response: Response) => response.json());
        // return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create( user: User ) {
        // Reformat data into drupal object
        let u = {
            'name': user.username,
            'mail': {
                'value': user.email
            },
            'pass': {
                'value': user.password
            }
        };

        let api = RestConfig.API_ENDPOINT + RestConfig.USER_API + '/register?_format=json';
        return this.http.post(api, u, this.headAttach()).map((response: Response) => response.json());
    }

    update( user: User ) {
        // Format data to drupal object
        let u = {
            'pass': [{
                'existing': user[0].currentpass
            }],
            'name': {
                'value': user[0].name
            },
            'mail': {
                'value': user[0].email
            }
        };

        if ( user[0].newpass !== undefined ) {
            if ( user[0].newpass.length !== 0 ) {
                u['pass'][0]['value'] = 'xx';
            }
        }

        // u = JSON.stringify(u);

        let api = RestConfig.API_ENDPOINT + RestConfig.USER_API + '/' + user[0].uid + '?_format=json';
        return this.http.patch(api, u, this.drupalAuthJson()).map((response: Response) => response.json());
    }

    deleteUser( id: number ) {
        let api = RestConfig.API_ENDPOINT + RestConfig.USER_API + '/' + id + '?_format=hal_json';
        return this.http.delete(api, this.drupalAuth()).map((response: Response) => response.json());
        // return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
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

    private headAttach() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return new RequestOptions({ headers: headers });
    }

    private drupalAuthJson() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( currentUser && currentUser.csrf_token ) {
            let headers = new Headers({
                'Authorization': 'Basic ' + currentUser.auth,
                'Content-Type': 'application/json'
            });
            return new RequestOptions({ headers: headers });
        }
    }

    private drupalAuth() {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( currentUser && currentUser.csrf_token ) {
            let headers = new Headers({
                'Authorization': 'Basic ' + currentUser.auth,
                'Content-Type': 'application/hal+json'
            });
            // let headers = new Headers({ 'Authorization': 'Basic YWRtaW46eHg=' });
            return new RequestOptions({ headers: headers });
        }
    }

}
