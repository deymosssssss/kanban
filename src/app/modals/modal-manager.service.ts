import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ModalManagerService {
  private modalObs$: Subject<number> = new Subject();

  constructor() {}

  getModalObs() {
    return this.modalObs$;
  }
}
