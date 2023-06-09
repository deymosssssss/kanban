import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManagerComponent } from './modal-manager.component';
import { AddProjectComponent } from './modals-view/add-project/add-project.component';
import { ButtonModule } from '../ui-components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './modals-view/add-task/add-task.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule],
  declarations: [ModalManagerComponent, AddProjectComponent, AddTaskComponent],
  exports: [ModalManagerComponent],
})
export class ModalManagerModule {}
