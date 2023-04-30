import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ModalID, ModalManagerService } from './modal-manager.service';

@Component({
  selector: 'app-modal-manager',
  templateUrl: './modal-manager.component.html',
  styleUrls: ['./modal-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalManagerComponent {
  currentID!: ModalID;
  isClosed: boolean = true;
  modalsID = ModalID;

  constructor(
    private modalManagerService: ModalManagerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modalManagerService.getModalObs().subscribe((modalID) => {
      this.currentID = modalID;
      this.isClosed = false;
      this.cdr.detectChanges();
    });
  }

  closeBg() {
    this.isClosed = true;
  }
}
