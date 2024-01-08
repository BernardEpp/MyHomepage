import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-progress',
  templateUrl: './language-progress.component.html',
  styleUrl: './language-progress.component.css',
})
export class LanguageProgressComponent {
  @Input() Title: string = '';
  @Input() Level: string = '';
  @Input() Value: number = 0;
}
