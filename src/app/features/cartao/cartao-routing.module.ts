import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCartaoComponent } from './components/cria-cartao/criar-cartao.component';

const routes: Routes = [
  {
    path: '',
    component: CriarCartaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoRoutingModule {}
