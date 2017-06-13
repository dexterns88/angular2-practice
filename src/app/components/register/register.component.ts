import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {}

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true parameter to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {

                    let msg = JSON.parse(error._body).message;
                    let tpl = '<ul>';
                    msg = msg.split('\n');

                    for (let i = 1; i < msg.length; i++) {
                        if ( msg[i].length > 0 ) {
                            tpl += '<li>' + msg[i] + '</li>';
                        }
                    }
                    tpl += '</ul>';

                    this.alertService.error(tpl);
                    this.loading = false;
                }
            );
    }
}
