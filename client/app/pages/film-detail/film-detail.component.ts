// START - USED SERVICES
/*
 *	FilmService.get
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	FilmService.getCast
 *		PARAMS: 
 *					Objectid key - Id film
 */
// END - USED SERVICES


// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { FilmService } from '../../services/film.service';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../../manage_film_example_db/actor';
import { Film } from '../../manage_film_example_db/film';

/**
 * FilmDetail Component
 */
@Component({
    selector: 'film-detail-edit',
    templateUrl : './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent {
    
    private film:Film;
    private cast:Actor[];
    
    constructor(
        private filmService: FilmService,
        private location: Location,
        private route: ActivatedRoute
    ) { 

        // GET ROUTE PARAM
        this.route.params.subscribe( param => {

            //GET FILM INFO
            filmService.get(param.id).subscribe(film => {
                this.film = film;
            })

            // GET CAST
            filmService.getCast(param.id).subscribe(cast =>{
                this.cast = cast;
            })
        })
    }
}