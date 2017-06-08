import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dice',
    templateUrl: 'dice.component.html'
})

export class DiceComponent {
    // Declare dice
    dice1: number = 0;
    dice2: number = 0;
    dice3: number = 0;
    delay: number = 100;

    constructor() {}

    throwDice() {
        this.dice1 = this._diceRandomizer();
        this.dice2 = this._diceRandomizer();
        this.dice3 = this._diceRandomizer();
    }

    _diceRandomizer() {
        let maxNumber = 6;
        this.delay *= 2;
        return Math.floor( (Math.random() * maxNumber ) + 1 );
    }
}
