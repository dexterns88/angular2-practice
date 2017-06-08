import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.components.html',
    providers: [MovieService]
})

export class MovieComponent implements OnInit {
    movies: Movie[];
    pager = {
        current: 0,
        pageCount: 1,
        itemsPerPage: 1
    };

    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this._getContent(0);
    }
    // On change
    onPageChange(page: number) {
        this._getContent(page);
    }
    // Get content from services and push it to angular scope
    _getContent(page: number) {
        this.movieService.getPosts(page).subscribe(movies => {

            // Get movie result form json results drupal
            this.movies = movies.results;

            // Get info about page counter
            this.pager.pageCount = movies.count / movies.inView;

            // Get info about items per page
            this.pager.itemsPerPage = movies.inView;


            this.movies.forEach(function(el, index) {
                let tpl = '';
                for ( let i = 0; i < el.field_stars; i++ ) {
                    tpl += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span> ';
                }
                el.field_stars = tpl;
            });
        });
    }
}

interface Movie {
    title: string;
    body: any;
    field_stars: any;
}