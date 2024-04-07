import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () =>
      import('./features/cliente/cliente.module').then((m) => m.ClienteModule),
  },

  {
    path: 'cartao',
    loadChildren: () =>
      import('./features/cartao/cartao.module').then((m) => m.CartaoModule),
  },

  {
    path: 'avaliador',
    loadChildren: () =>
      import('./features/avaliador/avaliador.module').then(
        (m) => m.AvaliadorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
