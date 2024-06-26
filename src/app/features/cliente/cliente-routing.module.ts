import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarClienteComponent } from './components/criar-cliente/criar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: CriarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
