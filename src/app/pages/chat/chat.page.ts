import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SesionService } from 'src/app/servicios/sesion.service';
import { ChatService } from 'src/app/servicios/chat.service';
import { DataCursoService } from 'src/app/servicios/data-curso.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage {

  mensaje!: string;
  cursoActual: string = "";

  constructor( public sesion : SesionService, private chat: ChatService, private dataCurso: DataCursoService) {
    this.cursoActual = this.dataCurso.obtenerCurso();
    console.log('Curso: ', this.cursoActual);
  }
  
  cargarMensajesFiltrados() {
    
    const container = document.getElementsByClassName("contenido-chat")[0];
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
    return this.chat.chatCollection.filter(
      (mensaje) => mensaje.curso === this.cursoActual
    );
  }
  

  enviarMensaje(){
    if(this.mensaje.trim()!= '' && this.mensaje.length<=21){
      this.chat.crearMensajes(this.sesion.getUsuario(), this.mensaje, this.cursoActual);
      this.limpiarCampos(); 
    }
  }


  limpiarCampos(){
    this.mensaje="";
  }
  

}
