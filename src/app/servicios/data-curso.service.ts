import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCursoService {
  curso: string = "";

  constructor() { }

  irAlChat(curso: string) {
    this.curso = curso;
  }

  obtenerCurso(): string {
    return this.curso;
  }
}
