import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { addIcons } from 'ionicons';
import { power, pencil, powerOutline, logInOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class MenuComponent  implements OnInit {

  estaLoggeado: boolean = false;
  constructor(private auth: Auth, private router: Router) {
    addIcons({power, pencil, powerOutline, logInOutline });
  }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      this.estaLoggeado = !!user;
    });
  }
  
  cerrarMenu() { //hacer interfaz
    const menu = document.querySelector('ion-menu');
    if (menu) {
      (menu as any).close();
    }
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/login']);
        this.cerrarMenu();
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

}
