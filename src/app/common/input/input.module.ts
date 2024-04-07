import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { InputNormalComponent } from './components/input-normal/input-normal.component';
import { InputMaskComponent } from './components/input-mask/input-mask.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [InputNormalComponent, InputMaskComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskPipe,
    NgxMaskDirective,
  ],
  exports: [InputNormalComponent, InputMaskComponent],
})
export class InputModule {}
