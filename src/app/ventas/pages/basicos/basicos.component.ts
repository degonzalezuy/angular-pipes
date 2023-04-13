import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower: string = 'diego';
  nombreUpper: string = 'DIEGO';
  nombreCompleto: string = 'diegO gOnZaLeZ';

  fecha: Date = new Date();
  
}
