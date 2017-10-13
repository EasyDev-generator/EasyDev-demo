// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { FilmService } from '../../services/film.service';

/**
 * FilmDetail Component
 */
@Component({
    selector: 'film-detail-edit',
    templateUrl : './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent {
    
    constructor(
                private filmService: FilmService,
                private location: Location) { 
        
    }
}