// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { FilmService } from '../../services/film.service';

/**
 * SearchFilms Component
 */
@Component({
    selector: 'search-films-edit',
    templateUrl : './search-films.component.html',
    styleUrls: ['./search-films.component.css']
})
export class SearchFilmsComponent {
    
    constructor(
                private filmService: FilmService,
                private location: Location) { 
        
    }
}