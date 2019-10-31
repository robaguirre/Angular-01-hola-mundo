import { Component } from '@angular/core';

@Component({
    // se pone le prefijo 'app-' para saber que es personalizado
    selector: 'app-header',
    // los `` permiten añadir multiples linea
    // template: `<h1>Hola Mundo Header</h1>`
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    headerName: 'cocoloco';
}

