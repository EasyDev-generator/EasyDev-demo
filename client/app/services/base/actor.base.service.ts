/**
 * 
 * 
         _                     _              _ _ _     _   _     _        __ _ _      
      __| | ___    _ __   ___ | |_    ___  __| (_| |_  | |_| |__ (_)___   / _(_| | ___ 
     / _` |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| | |_| | |/ _ \
    | (_| | (_) | | | | | (_) | |_  |  __| (_| | | |_  | |_| | | | \__ \ |  _| | |  __/
     \__,_|\___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                   

 * 
 *  FOR CUSTOMIZE ActorBaseService PLEASE EDIT ../Actor.service.ts
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
import { Actor } from '../../manage_film_example_db/actor';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Actor.service.ts
 */
 
/*
 * SCHEMA DB Actor
 * 
	{
		birthDate: {
			type: 'Date'
		},
		name: {
			type: 'String', 
			required : true
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		cast: [{
			type: Schema.ObjectId,
			ref : "Film"
		}],
		
	}
 * 
 */
@Injectable()
export class ActorBaseService {

    contextUrl:string = config.host + "/actor";
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	/**
     * Create new item
     */
     create(item: Actor): Observable<void> {
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
     * Get one item by id
     */
	
	get(id: string): Observable<Actor> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Actor)
    }

    /**
     * Get list of items
     */
	
	list(): Observable<Actor[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Actor[])
    }
    /**
     * Update item
     */
	update(item: Actor): Observable<void> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}
