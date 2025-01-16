import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-directiva-ng-if',
  imports: [FormsModule, NgStyle, NgIf],
  templateUrl: './directiva-ng-if.component.html',
  styleUrl: './directiva-ng-if.component.css',
})
export class DirectivaNgIfComponent {
  //explicación de ngIf
  nota = 0;
  obtenerNota = false;
  nombreAlumno: string = '';
  nombreModulo = '';
  consultaNota() {
    this.nota = 7;
    this.obtenerNota = true;
  }
}
