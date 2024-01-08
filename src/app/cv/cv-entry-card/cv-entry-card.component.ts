import { Component, Input } from '@angular/core';
import { CvItem } from '../models/CvItem';

@Component({
  selector: 'app-cv-entry-card',
  templateUrl: './cv-entry-card.component.html',
  styleUrl: './cv-entry-card.component.css',
})
export class CvEntryCardComponent {
  @Input() Data: CvItem | null = null;
}
