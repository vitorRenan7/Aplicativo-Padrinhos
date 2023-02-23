import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import  {FormularioComponent} from './cadastro/formulario/formulario.component'

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./inscrever/inscrever.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
