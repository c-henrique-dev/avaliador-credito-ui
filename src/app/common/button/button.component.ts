import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: string = '';
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
}
