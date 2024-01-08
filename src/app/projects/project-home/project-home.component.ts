import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrl: './project-home.component.css',
})
export class ProjectHomeComponent implements OnInit {
  projects: Array<Project> = [];
  url = './assets/project-data.json';

  // projects: Array<Project> = [
  //   {
  //     title: 'Go Course',
  //     subtitle: 'Go Basic Course by Stephen Grider',
  //     date: '11/2023',
  //     content: 'I learned the basics of go.',
  //     tags: ['Go'],
  //     repoUrl: 'https://github.com/BernardEpp/go-course.git',
  //   },
  //   {
  //     title: 'Microservice Architecture with C#',
  //     subtitle: 'I build a Microsverice Applickation using C#',
  //     date: '10/2023',
  //     content:
  //       'In this course  by Neil Cummings, I build an auction house application using a microservice architecture in C#',
  //     tags: [
  //       'C#',
  //       'Microsverices',
  //       'PostgreSQL',
  //       'MongoDB',
  //       'RabbitMQ',
  //       'Docker Compose',
  //     ],
  //     repoUrl: 'https://github.com/BernardEpp/MyAuctionSite.git',
  //   },
  //   {
  //     title: 'Microservices with Node JS and React',
  //     subtitle: '',
  //     date: '11/2023',
  //     content:
  //       'This course by Stephen Grider was my introduction to microservices. I build a e-commerce platform to purchase tickets.',
  //     tags: [
  //       'React',
  //       'NodeJS',
  //       'Kubernetes',
  //       'Skaffold',
  //       'nats streaming server',
  //       'SSR',
  //     ],
  //     repoUrl: 'https://github.com/BernardEpp/ticketing.git',
  //   },
  // ];

  /**
   *
   */
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get<Array<Project>>(this.url).subscribe((res) => {
      this.projects = res;
      // console.log(res);
    });
  }
}
