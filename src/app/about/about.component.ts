import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  url = './assets/about-me.json';
  @Input() Essay: string = '';

  /**
   *
   */
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get<{ Essay: string }>(this.url).subscribe((res) => {
      this.Essay = res.Essay;
    });
  }
}
