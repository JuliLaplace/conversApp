import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addIcons } from 'ionicons';
import { powerOutline} from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class HeaderComponent implements OnInit {

  estaLoggeado: boolean = false;
  constructor(private auth: Auth, private router: Router) {
    addIcons({powerOutline });

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
