import { TelMascaraDirective } from './../../../diretivas/tel-mascara.directive';
import { CpfMascaraDirective } from './../../../diretivas/cpf-mascara.directive';
import { HttpClientModule } from '@angular/common/http';
import { InformacoesService } from 'src/app/Service/informacoes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPageRoutingModule } from './editar-routing.module';

import { EditarPage } from './editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    EditarPageRoutingModule,
  ],
  providers: [InformacoesService],
  declarations: [EditarPage,TelMascaraDirective, CpfMascaraDirective],
})
export class EditarPageModule {}
