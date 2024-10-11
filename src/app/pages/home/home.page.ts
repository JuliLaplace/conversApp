import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataCursoService } from 'src/app/servicios/data-curso.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class HomePage {



  constructor(private dataCurso: DataCursoService, private route: Router) {
    
  }

  seleccionarCurso(curso: string) {
    this.dataCurso.irAlChat(curso);
    // this.router.rout('/chat');  // Navegar al componente del chat
  }

}
