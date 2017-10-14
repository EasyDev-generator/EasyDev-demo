/**
 * 
 * 
         _                     _              _ _ _     _   _     _        __ _ _      
      __| | ___    _ __   ___ | |_    ___  __| (_| |_  | |_| |__ (_)___   / _(_| | ___ 
     / _` |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| | |_| | |/ _ \
    | (_| | (_) | | | | | (_) | |_  |  __| (_| | | |_  | |_| | | | \__ \ |  _| | |  __/
     \__,_|\___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                   

 * 
 *  FOR CUSTOMIZE FilmBaseService PLEASE EDIT ../Film.service.ts
 * 
 *  THIS FILE WILL BE OVERWRITTEN BY NEXT EASYDEV GENERATION
 * 
 */
 
// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Film } from '../../manage_film_example_db/film';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Film.service.ts
 */
 
/*
 * SCHEMA DB Film
 * 
	{
		genre: {
			type: 'String',
			enum : ["Action","Crime","Fantasy","Horror"], 
		},
		title: {
			type: 'String', 
			required : true
		},
		year: {
			type: 'Number'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		cast: [{
			type: Schema.ObjectId,
			ref : "Film"
		}],
		filmMaker: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Film"
		},
		
	}
 * 
 */
@Injectable()
export class FilmBaseService {

    contextUrl:string = config.host + "/film";
    constructor(
        protected http: Http,
        protected authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	/**
     * Create new item
     */
     create(item: Film): Observable<void> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
    
    /**
     * Find by cast
     */
    findByCast(id: string): Observable<Film[]> {
        return this.http
            .get(this.contextUrl + '/findBycast/' + id)
            .map(response => response.json() as Film[]);
    }	
    
    /**
     * Find by filmMaker
     */
    findByFilmMaker(id: string): Observable<Film[]> {
        return this.http
            .get(this.contextUrl + '/findByfilmMaker/' + id)
            .map(response => response.json() as Film[]);
    }	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Film> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Film)
    }

    /**
     * Get list of items
     */
	
	list(): Observable<Film[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Film[])
    }
    /**
     * Update item
     */
	update(item: Film): Observable<void> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }

    /**
     * Get cast
     */
	getCast(id: string): Observable<any[]> {
        return this.http
            .get(this.contextUrl + '/' + id + '/getcast')
            .map(response => response.json())
    }


    /*
    Name: search
    Description: Method for search films
    Params: 
        title - String
        genre - String
    */
    search(): Observable<any> {
        return this.http
            .get(this.contextUrl + "/search")
            .map(response => response.json());
    }
		
}
