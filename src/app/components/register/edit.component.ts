import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../../_models/index';
import { AlertService, UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'edit.component.html'
})

export class EditComponent implements OnInit {
    private uid: number;
    loading = false;
    currentUser: any;

    editUser: any = [];

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private alertService: AlertService,
        private router: Router
    ) {}

    ngOnInit() {
        this.uid = +this.route.snapshot.params['id'];

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this._getUser(this.uid);

    }

    edit() {
        this.loading = true;
        this.userService.update(this.editUser)
            .subscribe(
                data => {
                    this.alertService.success('User edit successful', true);
                    this.loading = false;

                    // valid redirect depend of user change
                    if ( this.uid === this.currentUser.uid ) {
                        this.router.navigate(['/login']);
                    } else {
                        this.router.navigate(['/home']);
                    }

                },
                error => {
                    let msg = JSON.parse(error._body).message;
                    this.alertService.error(msg);
                    this.loading = false;
                }
            );
    }

    _getUser(id: number) {
        this.userService.getById(id).subscribe(user => {

            this.editUser[0] = {
                uid: user.uid[0].value,
                name: user.name[0].value,
                email: user.mail[0].value
            };
        },
        (error) => {
            console.log( error );
        });
    }
}
