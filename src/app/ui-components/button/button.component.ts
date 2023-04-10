import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="emitClick()" [ngClass]="{ disabled }">
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled = false;

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitClick() {
    !this.disabled && this.clickEvent.emit();
  }
}
