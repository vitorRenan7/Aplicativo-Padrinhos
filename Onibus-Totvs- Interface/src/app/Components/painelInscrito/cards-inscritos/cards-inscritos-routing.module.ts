import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsInscritosPage } from './cards-inscritos.page';

const routes: Routes = [
  {
    path: '',
    component: CardsInscritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsInscritosPageRoutingModule {}
