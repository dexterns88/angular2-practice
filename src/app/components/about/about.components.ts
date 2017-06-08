import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.components.html'
})

export class AboutComponent  {
    title = 'Tour of Heroes';
    name = 'test';
    lastRandom: number = 0;
    nameList = [
        'Goreces u paklu',
        'Osudjen na propast',
        'Bere cvece ( peder )',
        'Crvenkapa',
        'Mravojed',
        'Masa i medved',
        'i jos po nesto'
    ];

    constructor() {}

    changeName() {
        let item = this._diceRandomizer();
        this.name = this.nameList[item];
    }

    _diceRandomizer() {
        let maxNumber = 6;
        let newRand = Math.floor( (Math.random() * maxNumber ) + 1 );

        // Prevent duplicated result
        if (newRand === this.lastRandom) {
           if ( newRand > 6 ) {
               newRand++;
           }  else {
               newRand--;
           }
        }
        this.lastRandom = newRand;
        return newRand;
    }
}
