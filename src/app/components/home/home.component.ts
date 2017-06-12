import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    allUser: any;
    allUserStatus = {
        status: true,
        message: ''
    };
    bodyClasses: string = 'layout-full page-home';

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        // $('body').addClass(this.bodyClasses);
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {

        this.userService.getAll().subscribe(allUser => {
            this.allUser = allUser.results;
        },
        (error) => {
            this.allUserStatus.status = false;
            this.allUserStatus.message = this._statusHandler(error.status);
        });
    }

    private _statusHandler(error: number) {
        if ( error === 403 ) {
            return 'You don\'t have permission to access this content';
        }
    }
}
