import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputTypes = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input-normal',
  templateUrl: './input-normal.component.html',
  styleUrls: ['./input-normal.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNormalComponent),
      multi: true,
    },
  ],
})
export class InputNormalComponent implements ControlValueAccessor {
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
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
