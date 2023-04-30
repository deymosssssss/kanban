import { Injectable } from '@angular/core';
import { Project } from '../entitys/project';
import { v4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private data$: BehaviorSubject<Project[]> = new BehaviorSubject([
    {
      id: v4(),
      title: 'Project1Test',
      sections: [
        {
          id: v4(),
          title: 'qwe',
          tasks: [],
        },
        {
          id: v4(),
          title: 'asd',
          tasks: [],
        },
        {
          id: v4(),
          title: 'zxc',
          tasks: [],
        },
      ],
    },
  ] as Project[]);

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

  getProjectById(id: string) {
    return this.data$.getValue().find((el) => {
      return id === el.id;
    });
  }

  // deleteProject() {}
}
