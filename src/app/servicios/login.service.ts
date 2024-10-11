import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';


export interface loginError {
  errorFlag: boolean;
  errorMsj: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth, private router: Router) { }


  
  async login(email: string, pwd: string): Promise<loginError> {
    let error: loginError = {
      errorFlag: false,
      errorMsj: ""
    }

    return signInWithEmailAndPassword(this.auth, email, pwd)
      .then((res) => {
        this.router.navigate(['/home']);
        return error;
      })
      .catch(
        (e) => {
          error.errorFlag = true;
          switch (e.code) {
            default:
              error.errorMsj = "Usuario o contraseña incorrectos."
              break;
          }
          return error;
        }
      )
  }


  async logout(): Promise<void> {
    console.log(this.auth.currentUser?.email)
    return signOut(this.auth)
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
