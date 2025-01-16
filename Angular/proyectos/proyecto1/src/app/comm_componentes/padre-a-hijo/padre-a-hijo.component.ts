import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-padre-a-hijo',
  imports: [],
  templateUrl: './padre-a-hijo.component.html',
  styleUrl: './padre-a-hijo.component.css',
})
export class PadreAHijoComponent {
  @Input() modParaHijo!: { modulo: string };
  @Input() indiceParaHijo!: number;
}
