import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import  {FormularioComponent} from './cadastro/formulario/formulario.component'
import { CadastroConcluidoComponent } from './tela_final/cadastro-concluido/cadastro-concluido.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'cadastro-concluido',
    component: CadastroConcluidoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
