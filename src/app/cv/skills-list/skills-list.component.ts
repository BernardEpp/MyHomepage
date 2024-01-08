import { Component, Input } from '@angular/core';
import { SkillItem } from '../models/SkillItem';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.css',
})
export class SkillsListComponent {
  @Input() Skills: Array<SkillItem> | undefined = new Array<SkillItem>();
}
