import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DashboardService {

    constructor(private http: Http) {
        console.log('dashboard service init');
    }

    getAllUser() {
        // let endpoint = 'http://djs.loc/api/users';
        // let endpoint = 'http://djs.loc/api/movies';
        let endpoint = 'http://djs.loc/allusers';
        return this.http.get(endpoint)
            .map(res => res.json());
    }
}
