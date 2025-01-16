import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PadreAHijoComponent } from '../../comm_componentes/padre-a-hijo/padre-a-hijo.component';

@Component({
  selector: 'app-directiva-ng-for',
  imports: [NgFor, PadreAHijoComponent],
  templateUrl: './directiva-ng-for.component.html',
  styleUrl: './directiva-ng-for.component.css',
})
export class DirectivaNgForComponent {
  //explicación para ngFor (saber los módulos de 2º de DAW)
  arrayModulos = [
    { modulo: 'HLC' },
    { modulo: 'DAW' },
    { modulo: 'DIW' },
    { modulo: 'DWEC' },
    { modulo: 'DWES' },
  ];
}
