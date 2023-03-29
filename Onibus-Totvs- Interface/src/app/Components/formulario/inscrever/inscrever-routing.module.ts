import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscreverPage } from './inscrever.page';

const routes: Routes = [
  {
    path: '',
    component: InscreverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscreverPageRoutingModule {}
