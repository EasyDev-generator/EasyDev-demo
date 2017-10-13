// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

/**
 * HomeAdmin Component
 */
@Component({
    selector: 'home-admin-edit',
    templateUrl : './home-admin.component.html',
    styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
    
    constructor(
                private location: Location) { 
        
    }
}