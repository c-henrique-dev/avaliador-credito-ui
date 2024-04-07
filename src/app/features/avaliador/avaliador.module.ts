import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AvaliadorRoutingModule } from './avaliador-routing.module';
import { SolicitaCartaoComponent } from './components/solicitar-cartao/solicitar-cartao.component';
import { RealizarAvaliacaoComponent } from './components/realizar-avaliacao/realizar-avaliacao.component';
import { SituacaoClienteComponent } from './components/situacao-cliente/situacao-cliente.component';
import { ButtonModule } from 'src/app/common/button/button.module';
import { InputModule } from 'src/app/common/input/input.module';

@NgModule({
  declarations: [
    SolicitaCartaoComponent,
    RealizarAvaliacaoComponent,
    SituacaoClienteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AvaliadorRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
  ],
})
export class AvaliadorModule {}
