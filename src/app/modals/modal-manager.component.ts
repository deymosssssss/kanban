import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ModalManagerService } from './modal-manager.service';

@Component({
  selector: 'app-modal-manager',
  templateUrl: './modal-manager.component.html',
  styleUrls: ['./modal-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalManagerComponent {
  isClosed: boolean = true;

  constructor(
    private modalManagerService: ModalManagerService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.modalManagerService.getModalObs().subscribe((val) => {
      this.isClosed = false;
      this.cdr.detectChanges();
    });
  }

  closeBg() {
    this.isClosed = true;
  }
}
