import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import localeEs from '@angular/common/locales/es-UY';
import { registerLocaleData} from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //PrimeNgModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    
  ],
  providers: [
    /*{
      provide: LOCALE_ID, useValue: 'es-UY'
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
