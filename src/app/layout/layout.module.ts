import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from '../ui-components/button/button.module';

@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [CommonModule, ButtonModule],
  exports: [MenuComponent, HeaderComponent],
})
export class LayoutModule {}
