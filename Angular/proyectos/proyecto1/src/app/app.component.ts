import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { InterpolacionComponent } from './comm_dom_comp/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './comm_dom_comp/property-binding/property-binding.component';
import { EventBindingComponent } from './comm_dom_comp/event-binding/event-binding.component';
import { BindingBidireccionalComponent } from './comm_dom_comp/binding-bidireccional/binding-bidireccional.component';
import { DirectivaNgIfComponent } from './directivas/directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgForComponent } from './directivas/directiva-ng-for/directiva-ng-for.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Componente1Component,
    Componente2Component,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    BindingBidireccionalComponent,
    DirectivaNgIfComponent,
    DirectivaNgForComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto1';
}
