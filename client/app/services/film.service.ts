// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { FilmBaseService } from "./base/film.base.service";
import { Film } from '../manage_film_example_db/film';

/**
 * YOU CAN OVERRIDE HERE FilmBaseService
 */

@Injectable()
export class FilmService extends FilmBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }

    /*
    Name: search
    Description: Method for search films
    Params: 
        title - String
        genre - String
    */
    search(title?:any, genre?:any): Observable<any> {

        // SET QUERY PARAMS
        let params: URLSearchParams = new URLSearchParams();
        
        if (title)
            params.set('title', title);
        
        if(genre)
            params.set('genre', genre);
        
        // CALL API
        return this.http
            .get(this.contextUrl + "/search?" + params.toString())
            .map(response => response.json());
    }

}