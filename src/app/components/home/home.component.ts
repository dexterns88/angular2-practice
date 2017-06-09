import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    users: User[] = [];
    bodyClasses: string = 'layout-full page-home';

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.loadAllUsers();
        // $('body').addClass(this.bodyClasses);
    }

    ngOnDestroy() {
        // $('body').removeClass(this.bodyClasses);
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {this.users = users; });
    }
}
