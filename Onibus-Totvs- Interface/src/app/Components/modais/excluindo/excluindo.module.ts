import { HttpClientModule } from '@angular/common/http';
import { InformacoesService } from 'src/app/Service/informacoes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluindoPageRoutingModule } from './excluindo-routing.module';

import { ExcluindoPage } from './excluindo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ExcluindoPageRoutingModule
  ],
  providers:[InformacoesService],
  declarations: [ExcluindoPage]
})
export class ExcluindoPageModule {}
