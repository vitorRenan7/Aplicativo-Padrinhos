import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluindoPage } from './excluindo.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluindoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluindoPageRoutingModule {}
