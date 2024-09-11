import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent  implements OnInit {
  emailUsuario: string | null = null;
  constructor(private auth: Auth) {}

  ngOnInit() {
   
    this.emailUsuario = this.auth.currentUser?.email ? this.auth.currentUser?.email : null;
    
  }

}
