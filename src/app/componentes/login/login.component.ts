import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule, CommonModule],
})
export class LoginComponent {

  constructor(private auth: Auth, private router: Router) {}


  pwd:string ="";
  email:string="";
  errorMsj:string="";
  errorFlag:boolean = false;
  
  limpiarCampos(){  //hacer interfaz
    this.email="";
    this.pwd="";
  }

  loguear() {
    signInWithEmailAndPassword(this.auth, this.email, this.pwd)
      .then((res) => {
        this.limpiarCampos();
        this.router.navigate(['/home']);
        this.errorFlag=false;
      }).catch((e) => {
        this.errorFlag = true;
        this.errorMsj = "Usuario o contraseña incorrecta. Reintente.";
        
      });
  }

  loguearUsuario(parametro: string) {
    if (parametro=="ana") {
      this.email = "ana@ana.com";
      this.pwd = "123456";
    } else if(parametro =="pepe") {
      this.email = "pepe@pepe.com";
      this.pwd = "123456abcd";
    }else{
      this.email = "morty@morty.com";
      this.pwd = "pescaditos";
    }
  }
}

