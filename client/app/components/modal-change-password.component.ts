// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { Md5 } from "ts-md5/dist/md5";

// Security
import { AuthenticationService } from '../security/authentication.service';
import { SecurityService } from "../security/services/security.service";
import { UserService } from '../security/services/user.service';
import { User } from "../security/User";

/**
 * Change password component
 */
@Component({
    selector: 'modal-change-password',
    templateUrl: './modal-change-password.component.html',
})
export class ModalChangePasswordComponent implements OnInit {

    user: User;
    id: string;
    passwordOld: string;
    passwordNew: string = "";
    passwordNewConfirm: string = "";
    passwordAdmin: string;
    showError: boolean;
    clicked:boolean;
    
    constructor(
        public dialogRef: MatDialogRef<ModalChangePasswordComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private userService: UserService,
        private route:ActivatedRoute,
        private authenticationService:AuthenticationService,
        private securityService: SecurityService,
    ) {
        if(data.id)
            this.id = data.id;     
    }

    ngOnInit(): void {
        this.route.params.subscribe( params => {
            //GET LOGGED USER
            this.authenticationService.getUser().subscribe((user:User) => {
                this.user = user;
            });
        })
    }

    /**
     * Change my password
     */
    changePassword = function(formValid: boolean) {
        if (formValid) {
            // Convert passwords in MD5
            var passwordNew = Md5.hashStr(this.passwordNew).toString();
            var passwordOld = Md5.hashStr(this.passwordOld).toString(); 
    
            // Change password
            this.securityService.changePassword(passwordNew, passwordOld ).subscribe( (data:any) => {
                this.passwordOld = null;
                this.passwordNew = "";
                this.passwordNewConfirm = "";
                this.passwordAdmin = null;
                this.showError = false;
                this.close();
            }, (err:any) => {
                this.showError = true;
            })
        } else {
            this.clicked = true
        }
    }

    /**
     * Change password other users from admin
     */
    changePasswordByAdmin(formValid:boolean) {
        if (formValid) {
            // Convert passwords in MD5
            var passwordNew =  Md5.hashStr(this.passwordNew).toString();
            var passwordAdmin = Md5.hashStr(this.passwordAdmin).toString();
    
            // Change password
            this.userService.changePassword(this.id, passwordNew, passwordAdmin ).subscribe(data => {
                this.passwordAdmin = null;
                this.passwordNew = null;
                this.passwordNewConfirm = null;
                this.showError = false;
                this.close();
            }, err => {
                this.showError = true;
            })
        } else {
            this.clicked = true
        }
    };

    /**
     * Valiator confirm password
     */
    passwordsMismatch(control: FormControl, form: FormGroupDirective | NgForm): boolean { 
        return this.passwordNew.length >= 1 && this.passwordNewConfirm.length >= 1 && this.passwordNew != this.passwordNewConfirm; 
    }

    /**
     * Show error valiator confirm password
     */
    passwordError(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        return this.showError || (this.clicked && (!control['_value'] || control['_value'] == "")); 
    }

    /**
     * Close modal
     */
    close(): void {
        this.dialogRef.close();
    }

}