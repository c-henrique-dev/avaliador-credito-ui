import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMaskComponent),
      multi: true,
    },
  ],
})
export class InputMaskComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() mask: string = '';
  @Input() class: string = '';

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const cpf = value.replace(/\D/g, '');
    this.onChange(cpf);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
