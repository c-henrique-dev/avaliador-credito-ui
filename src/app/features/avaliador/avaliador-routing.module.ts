import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitaCartaoComponent } from './components/solicitar-cartao/solicitar-cartao.component';
import { RealizarAvaliacaoComponent } from './components/realizar-avaliacao/realizar-avaliacao.component';
import { SituacaoClienteComponent } from './components/situacao-cliente/situacao-cliente.component';

const routes: Routes = [
  {
    path: 'solicitarCartao',
    component: SolicitaCartaoComponent,
  },

  {
    path: 'realizarAvaliacao',
    component: RealizarAvaliacaoComponent,
  },

  {
    path: 'situacaoCliente',
    component: SituacaoClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliadorRoutingModule {}
