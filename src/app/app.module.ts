import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './core/services/data-service.service';
import { ProjectStateService } from './core/services/project-state.service';
import { LayoutModule } from './layout/layout.module';
import { ModalManagerModule } from './modals/modal-manager.module';
import { ModalManagerService } from './modals/modal-manager.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ModalManagerModule],
  providers: [DataService, ProjectStateService, ModalManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
