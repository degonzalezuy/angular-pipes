import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
//import { MenuItem } from 'primeng/api';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { 
  
}
