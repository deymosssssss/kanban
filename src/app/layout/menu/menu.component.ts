import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/entitys/project';
import { DataService } from 'src/app/core/services/data-service.service';
import { ProjectStateService } from 'src/app/core/services/project-state.service';
import { ModalManagerService } from 'src/app/modals/modal-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  projects!: Project[];

  constructor(
    private dataService: DataService,
    public projectState: ProjectStateService,
    private modalManagerService: ModalManagerService
  ) {}
  ngOnInit(): void {
    this.dataService.getProjectsObs().subscribe((projects) => {
      this.projects = projects;
      this.projectState
        .getCurrentProject()
        .next(this.projects[this.projects.length - 1]?.id);
    });
  }

  getProjectsObs() {
    return this.dataService.getProjectsObs();
  }

  changeActiveItem(id: string) {
    this.projectState.getCurrentProject().next(id);
  }

  createProjectEvent() {
    this.modalManagerService.getModalObs().next(1);
  }
}
