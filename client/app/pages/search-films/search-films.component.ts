// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { FilmService } from '../../services/film.service';
import { Film } from '../../manage_film_example_db/film';

/**
 * SearchFilms Component
 */
@Component({
    selector: 'search-films-edit',
    templateUrl : './search-films.component.html',
    styleUrls: ['./search-films.component.css']
})
export class SearchFilmsComponent {
    
    title:string;
    genre:string;
    filmList:Film[];
    
    constructor(
        private filmService: FilmService,
        private location: Location) { 
    }

    search() {
        this.filmService.search(this.title, this.genre).subscribe( response => {
            this.filmList = response
        })
    }
}