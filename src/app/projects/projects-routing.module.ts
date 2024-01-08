import { RouterModule, Routes } from '@angular/router';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
