import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})

export class DashboardComponent implements  OnInit {
    allUsers: any;
    
    constructor(private dashboardService: DashboardService) {
        console.log( 'init dashboard' );
    }

    ngOnInit() {
        console.log( 'implement init' );
        this._getUser();
    }

    _getUser() {
        console.log('get users');
        this.dashboardService.getAllUser().subscribe(allUsers => {
            this.allUsers = allUsers;

            console.log( this.allUsers );
            
        });
    }
}
