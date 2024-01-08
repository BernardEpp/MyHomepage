import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() date: string = '';
  @Input() content: string = '';
  @Input() tags: Array<string> = [];
  @Input() repoUrl: string = '';

  ngOnInit(): void {}
}
