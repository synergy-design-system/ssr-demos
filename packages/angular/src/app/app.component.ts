import { Component } from '@angular/core';
import { AllComponents } from '../allcomponents/allcomponents.component';

@Component({
    selector: 'app-root',
    imports: [
      AllComponents,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {}
