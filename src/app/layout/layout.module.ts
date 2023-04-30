import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from '../ui-components/button/button.module';
import { ViewComponent } from './view/view.component';
import { ViewSectionComponent } from './view/view-section/view-section.component';
import { ViewTaskComponent } from './view/view-task/view-task.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent, ViewComponent, ViewSectionComponent, ViewTaskComponent],
  imports: [CommonModule, ButtonModule],
  exports: [MenuComponent, HeaderComponent],
})
export class LayoutModule {}
