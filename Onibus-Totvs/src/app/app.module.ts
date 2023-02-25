import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//Exportação do FormsModule
import { FormsModule } from '@angular/forms';

//Componentes exportados
import {FormularioComponent} from './cadastro/formulario/formulario.component'

//Mask



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CpfMascaraDirective } from './Inputs/cpf-mascara.directive';
import { TelMascaraDirective } from './Inputs/tel-mascara.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CpfMascaraDirective,
    TelMascaraDirective,
  
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,

],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
