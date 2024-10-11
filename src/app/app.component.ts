import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { powerOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { LoginService } from './servicios/login.service';
import { SesionService } from './servicios/sesion.service';
import { SplashService } from './servicios/splash.service';
import { DataCursoService } from './servicios/data-curso.service';
import { ChatService } from './servicios/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class AppComponent {


  emailUsuario: string | null = null;

  constructor(private loginService: LoginService, private router: Router, public sesion: SesionService, public splashService: SplashService, public data: DataCursoService, private chat: ChatService) {
    addIcons({ powerOutline });
  }




  cerrarSesion() {
    this.data.curso = "";
    this.loginService.logout().then(() => {

    }).catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
  }


  volverInicio() {
    this.router.navigate(['/home']);
    this.data.curso = "";
  }

}
