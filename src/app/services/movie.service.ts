import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MovieService {

    constructor(private http: Http) {
        console.log( 'MovieService Initialized.......' );
    }

    getPosts() {
        return this.http.get('http://djs.loc/movie')
            .map(res => res.json());
    }
}
