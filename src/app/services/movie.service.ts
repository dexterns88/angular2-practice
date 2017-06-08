import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MovieService {

    constructor(private http: Http) {
        console.log( 'MovieService Initialized.......' );
    }

    getPosts(page?: number) {
        let endpoint = 'http://djs.loc/movie';
        if (page) {
            endpoint += '?page=' + page;
        }
        return this.http.get(endpoint)
            .map(res => res.json());
    }
}
