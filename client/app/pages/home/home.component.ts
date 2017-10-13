// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

/**
 * Home Component
 */
@Component({
    selector: 'home-edit',
    templateUrl : './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    constructor(
                private location: Location) { 
        
    }
}