import { TelMascaraDirective } from './../../../diretivas/tel-mascara.directive';
import { CpfMascaraDirective } from './../../../diretivas/cpf-mascara.directive';
import { InformacoesService } from 'src/app/Service/informacoes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { InscreverPageRoutingModule } from './inscrever-routing.module';
import { InscreverPage } from './inscrever.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    InscreverPageRoutingModule
  ],
  providers: [InformacoesService],
  declarations: [InscreverPage, CpfMascaraDirective, TelMascaraDirective]
})
export class InscreverPageModule {}
