// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { ActorService } from '../../services/actor.service';
import { FilmService } from '../../services/film.service';

// Import Models
import { Actor } from '../../manage_film_example_db/actor';

import { Film } from '../../manage_film_example_db/film';

/**
 * Edit component for ActorEdit
 */
@Component({
    selector: 'actor-edit',
    templateUrl : './actor-edit.component.html',
    styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {

    item: Actor;
    listCast: Actor[];
	externalFilm : Film[]	
    model : Actor;
    
    constructor(
                private actorService: ActorService,
                private filmService: FilmService,
                private route: ActivatedRoute,
                private location: Location) {
        // Init item
        this.item = new Actor();
	   this.externalFilm = [];
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.actorService.get(id).subscribe(item => this.item = item);
                }
                // Get relations
                this.filmService.findByCast(id).subscribe(list => this.externalFilm = list);
            });
    }

    /**
     * Save Item
     */
    save(formValid:boolean, item: Actor): void{
        if(formValid) {
            if(item._id){
                this.actorService.update(item).subscribe(data => this.goBack());
            } else {
                this.actorService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}