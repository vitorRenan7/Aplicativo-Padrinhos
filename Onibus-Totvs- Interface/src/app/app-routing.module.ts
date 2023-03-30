import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'splash',
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'inscrever',
    loadChildren: () =>
      import('./Components/formulario/inscrever/inscrever.module').then(
        (m) => m.InscreverPageModule
      ),
  },
  {
    path: 'cards-inscritos',
    loadChildren: () =>
      import(
        './Components/painelInscrito/cards-inscritos/cards-inscritos.module'
      ).then((m) => m.CardsInscritosPageModule),
  },
  {
    path: 'cards-inscritos/excluir/:id',
    component: ExcluirComponent,
  },
  {
    path: 'cards-inscritos/excluir/:id',
    component: ExcluirComponent,
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },,

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
