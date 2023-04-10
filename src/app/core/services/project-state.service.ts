import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectStateService {
  private currentProject$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  getCurrentProject() {
    return this.currentProject$;
  }
}
