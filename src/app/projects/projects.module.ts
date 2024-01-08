import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectHomeComponent, ProjectCardComponent],
  imports: [CommonModule, ProjectsRoutingModule, HttpClientModule],
})
export class ProjectsModule {}
