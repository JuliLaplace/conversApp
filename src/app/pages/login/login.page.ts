import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginService } from 'src/app/servicios/login.service';
import { SplashService } from 'src/app/servicios/splash.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class LoginPage {

  constructor(private servicioLogin: LoginService, private splashService: SplashService) { 
    setTimeout(() => {
      splashService.showHeaderFooter = true;
    }, 350);
  }


  pwd:string ="";
  email:string="";
  errorMsj:string="";
  errorFlag:boolean = false;

  ionViewWillEnter() {
    this.errorFlag = false;  // Resetea el mensaje de error

  }
  
  limpiarCampos(){  //hacer interfaz
    this.email="";
    this.pwd="";
  }

 
  login() {
    this.servicioLogin.login(this.email, this.pwd)
    .then((respuesta) =>{
      this.errorMsj = respuesta.errorMsj;
      this.errorFlag = respuesta.errorFlag;
      this.limpiarCampos();
      });
    }
  

  loguearUsuario(parametro: string) {
    if (parametro=="admin") {
      this.email = "admin@admin.com";
      this.pwd = "111111";
    } else if(parametro =="invitado") {
      this.email = "invitado@invitado.com";
      this.pwd = "222222";
    }else if(parametro == "usuario"){
      this.email = "usuario@usuario.com";
      this.pwd = "333333";
    }
    this.errorFlag = false; 
  }

  onInputChange() {
    this.errorFlag = false; 
  }
  

}
