import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CvItem } from '../models/CvItem';
import { Language } from '../models/Language';
import { SkillItem } from '../models/SkillItem';

type CvContent = {
  Languages: Array<Language>;
  Work: Array<CvItem>;
  Education: Array<CvItem>;
  Technologies: Array<string>;
  ProgrammingLanguages: Array<SkillItem>;
  Organizational: Array<string>;
  Systems: Array<string>;
  Interests: Array<string>;
  Skills: Array<string>;
  Tools: Array<string>;
  Volunteering: Array<CvItem>;
};

@Component({
  selector: 'app-cv-home',
  templateUrl: './cv-home.component.html',
  styleUrl: './cv-home.component.css',
})
export class CvHomeComponent implements OnInit {
  @Input() data: CvContent | undefined;

  url = './assets/cv-data.json';

  /**
   *
   */
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get<CvContent>(this.url).subscribe((res) => {
      this.data = res;

      console.log(this.data.Work);
    });
  }
}
