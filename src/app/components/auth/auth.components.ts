import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'auth',
    template: '<h1>Auth</h1>'
})

export class AuthComponent {

    constructor() {
        console.log( 'init auth components.....' );
    }
}
