import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.components.html',
    providers: [MovieService]
})

export class MovieComponent {
    movies: Movie[];

    constructor(private movieService: MovieService) {

        this.movieService.getPosts().subscribe(movies => {
            this.movies = movies;

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