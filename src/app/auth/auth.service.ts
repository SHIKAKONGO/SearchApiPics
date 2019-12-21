import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthService {

    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router , private afAuth: AngularFireAuth) {}

    initAuthListner() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['']);
            } else {
                this.authChange.next(false);
                this.router.navigate(['/signup']);
                this.isAuthenticated = false;
            }
        });
    }

    registerUser(authData: AuthData) {
        this.afAuth.auth
        .createUserWithEmailAndPassword(authData.email , authData.password)
        .then(result => {
        }).catch(error => {
            alert(error);
        });
    }

    login(authData: AuthData) {
        this.afAuth.auth
        .signInWithEmailAndPassword(authData.email , authData.password)
        .then(result => {
        }).catch(error => {
            alert(error);
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }
}
