import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css',
})
export class InterpolacionComponent {
  modulo = 'HLC';
  profesor = 'Pepito';
  horasTrabajadas = 40;
  //propiedad private para usar un método get o set
  private kms = 200;

  getKms() {
    return this.kms;
  }
}
