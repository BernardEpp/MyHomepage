import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  @Input() data: Project | null = null;

  ngOnInit(): void {}
}
