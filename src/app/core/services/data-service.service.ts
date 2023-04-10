import { Injectable } from '@angular/core';
import { Project } from '../entitys/project';
import { v4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private data$: BehaviorSubject<Project[]> = new BehaviorSubject(
    [] as Project[]
  );

  constructor() {}

  getProjectsObs() {
    return this.data$;
  }

  addProject(projectTitle: string) {
    this.data$.next([
      ...this.data$.getValue(),
      {
        id: v4(),
        title: projectTitle,
        sections: [],
      },
    ]);
  }

  // deleteProject() {}
}
