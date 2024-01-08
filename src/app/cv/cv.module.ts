import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvHomeComponent } from './cv-home/cv-home.component';
import { CvEntryCardComponent } from './cv-entry-card/cv-entry-card.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { CvContactComponent } from './cv-contact/cv-contact.component';
import { LanguageProgressComponent } from './language-progress/language-progress.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [
    CvHomeComponent,
    CvEntryCardComponent,
    CvSectionComponent,
    CvContactComponent,
    LanguageProgressComponent,
    SkillsListComponent,
    TagListComponent,
  ],
  imports: [CommonModule, CvRoutingModule, HttpClientModule],
})
export class CvModule {}
