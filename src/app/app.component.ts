import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule} from 'primeng/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple=true;
  }
  title = 'pipes';

  nombre: string = 'dieGo gonZalez';
  valor: number = 1000;
  obj = {
    nombre: 'Diego'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
