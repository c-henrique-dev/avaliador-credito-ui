import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CriarCartaoComponent } from './components/cria-cartao/criar-cartao.component';
import { CartaoRoutingModule } from './cartao-routing.module';
import { InputModule } from 'src/app/common/input/input.module';
import { SelectModule } from 'src/app/common/select/select.module';
import { ButtonModule } from 'src/app/common/button/button.module';

@NgModule({
  declarations: [CriarCartaoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CartaoRoutingModule,
    ReactiveFormsModule,
    SelectModule,
    ButtonModule,
    InputModule,
  ],
})
export class CartaoModule {}
