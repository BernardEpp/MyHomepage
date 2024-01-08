import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css',
})
export class TagListComponent {
  @Input() Tags: Array<string> | undefined = new Array<string>();
}
