import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvHomeComponent } from './cv-home/cv-home.component';

const routes: Routes = [
  {
    path: '',
    component: CvHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
