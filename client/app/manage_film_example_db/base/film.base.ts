/**
 * 
 * 
         _                     _              _ _ _     _   _     _        __ _ _      
      __| | ___    _ __   ___ | |_    ___  __| (_| |_  | |_| |__ (_)___   / _(_| | ___ 
     / _` |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| | |_| | |/ _ \
    | (_| | (_) | | | | | (_) | |_  |  __| (_| | | |_  | |_| | | | \__ \ |  _| | |  __/
     \__,_|\___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                   

 * 
 *  FOR CUSTOMIZE FilmBase PLEASE EDIT ../film.ts
 * 
 *  THIS FILE WILL BE OVERWRITTEN BY NEXT EASYDEV GENERATION
 * 
 */
 

import { FilmMaker } from '../film-maker';

/**
 * This is the model of Film object
 * 
 */
export class FilmBase {

    public _id: string;
    public genre?: String;
    public title: String;
    public year?: Number;
    
    // Relations filmMaker
	public filmMaker: FilmMaker;
	
	
	
	// Relations m:m cast
	public cast: String[]; 
	
    	
    constructor(){}
}