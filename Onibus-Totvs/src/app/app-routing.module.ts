import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CardComponent } from './Components/card-inscrito/card/card.component';
import  {FormularioComponent} from './Components/cadastro/formulario/formulario.component'
import { CadastroConcluidoComponent } from './Components/tela_final/cadastro-concluido/cadastro-concluido.component';


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
  },
  {
    path: 'card',
    component: CardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
