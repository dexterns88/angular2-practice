import {Component, Input, Output, EventEmitter} from '@angular/core';
import {JQueryStyleEventEmitter} from "rxjs/observable/FromEventObservable";

@Component({
    moduleId: module.id,
    selector: 'pager',
    templateUrl: 'pager.component.html',
    styleUrls: ['pager.component.css']
})

export class PagerComponent {

    _pageCurrent: number = 0;
    _itemsPerPage: number = 0;
    _pageCount: number = 0;

    pages: number[] = [];

    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    @Input() set pageCurrent(current: number) {
        this._pageCurrent = current;
    }

    @Input() set itemsPerPage(items: number) {
        this._itemsPerPage = items;
    }

    @Input() set pageCount(count: number) {
        this._pageCount = count;

        this.pages = [];
        for (let index = 0; index < this._pageCount; index++ ) {
            this.pages.push(index);
        }
    }

    constructor() {
        console.log( 'Pager Component load ......' );
    }

    onPageChange(page: number ) {
        this.pageChange.emit(page);
        this._pageCurrent = page;
    }

    prev() {
        if ( this._pageCurrent > 0 ) {
            this._pageCurrent -= 1;
            this.pageChange.emit(this._pageCurrent);
        }
    }

    next() {
        if ( this._pageCurrent < this._pageCount ) {
            this._pageCurrent += 1;
            this.pageChange.emit(this._pageCurrent);
        }
    }
}
