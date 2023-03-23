import { InformacoesService } from 'src/app/Service/informacoes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CardsInscritosPageRoutingModule } from './cards-inscritos-routing.module';

import { CardsInscritosPage } from './cards-inscritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    CardsInscritosPageRoutingModule
  ],
  providers: [InformacoesService],
  declarations: [CardsInscritosPage]
})
export class CardsInscritosPageModule {}
