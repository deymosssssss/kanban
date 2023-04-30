import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';

import { Project } from 'src/app/core/entitys/project';
import { DataService } from 'src/app/core/services/data-service.service';
import { ProjectStateService } from 'src/app/core/services/project-state.service';
import {
  ModalID,
  ModalManagerService,
} from 'src/app/modals/modal-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  title: any;
  projects!: Project[];

  constructor(
    private modalManagerService: ModalManagerService,
    public projectState: ProjectStateService,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataService.getProjectsObs().subscribe((projects) => {
      this.projects = projects;
      this.projectState
        .getCurrentProject()
        .next(this.projects[this.projects.length - 1]?.id);
    });
    this.activatedRoute.paramMap.subscribe((params) => {
      this.title = this.dataService.getProjectById(params.get('id') as any);
      console.log(params.get('id'));
      this.cdr.detectChanges();
    });
  }

  getProjectsObs() {
    return this.dataService.getProjectsObs();
  }

  createTaskEvent() {
    this.modalManagerService.getModalObs().next(ModalID.addTask);
  }
}
