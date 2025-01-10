import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1Component, Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto1';
}
