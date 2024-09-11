import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule, CommonModule]
})
export class RegistroComponent {

  public email: string = "";
  public pwd: string = "";
  errorMsj: string = "";
  errorFlag: boolean = false;

  constructor(private auth: Auth, private router: Router) { }
  limpiarCampos() {  //hacer interfaz
    this.email = "";
    this.pwd = "";
  }


  registrar() {
    createUserWithEmailAndPassword(this.auth, this.email, this.pwd)
      .then((res) => {
        this.limpiarCampos();
        this.router.navigate(['/home']);
        this.errorFlag = false;
      })
      .catch((e) => {
        this.errorFlag = true;
        switch (e.code) {
          case "auth/invalid-email":
            this.errorMsj = "Email invalido";
            break;
          case "auth/email-already-in-use":
            this.errorMsj = "Email ya registrado";
            break;
          case "auth/weak-password":
            this.errorMsj = "Contraseña demasiado débil";
            break;
          case "auth/missing-password":
            this.errorMsj = "Debe ingresar una contraseña";
            break;
          case "auth/missing-email":
            this.errorMsj = "Debe ingresar un email para registrarse";
            break;
          default:
            this.errorMsj = e.code
            break;
        }
      });
  }


}
