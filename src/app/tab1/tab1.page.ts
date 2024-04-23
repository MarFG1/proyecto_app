import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'Inglés' },
    { code: 'fr', name: 'Francés' },
    { code: 'de', name: 'Alemán' },
    { code: 'it', name: 'Italiano' }
  ];
  niveles: number[] = [1, 2, 3, 4, 5];
  datosAgregados: any[] = [];

  selectedLanguage!: string;
  nombre: string = '';
  nivel: number=1;
  nombreEmpresa: string = '';
  fechaInicio!: string;
  fechaTermino!: string;

  constructor() {}

  languageChanged() {
    console.log('Se seleccionó el idioma:', this.selectedLanguage);
  }
  submitForm() {
    const nuevoDato = {
      selectedLanguage: this.selectedLanguage,
      nombre: this.nombre,
      nivel: this.nivel,
      nombreEmpresa: this.nombreEmpresa,
      fechaInicio: this.fechaInicio,
      fechaTermino: this.fechaTermino
    };
    this.datosAgregados.push(nuevoDato);
    this.selectedLanguage = '';
    this.nombre = '';
    this.nivel = 1;
    this.nombreEmpresa = '';
    this.fechaInicio = '';
    this.fechaTermino = '';
    console.log('Datos agregados:', this.datosAgregados);
  }
  onFechaInicioChange(event: CustomEvent) {
    this.fechaInicio = event.detail.value; 
    console.log('Fecha de inicio:', this.fechaInicio);
  }

  onFechaTerminoChange(event: CustomEvent) {
    this.fechaTermino = event.detail.value; 
    console.log('Fecha de término:', this.fechaTermino);
  }

}
