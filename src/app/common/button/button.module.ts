import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
