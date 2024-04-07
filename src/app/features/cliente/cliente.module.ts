import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CriarClienteComponent } from './components/criar-cliente/criar-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ButtonModule } from 'src/app/common/button/button.module';
import { InputModule } from 'src/app/common/input/input.module';

@NgModule({
  declarations: [CriarClienteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
  ],
})
export class ClienteModule {}
