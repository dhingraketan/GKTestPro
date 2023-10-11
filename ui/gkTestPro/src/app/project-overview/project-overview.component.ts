import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    const myChart = new Chart("chrt", {
      type: 'bar',
      data: {
        labels: ['3.0.1', '3.0.0', '2.8.6', '2.5.2', '2.4.7', '2.4.1'],
        datasets: [{
          label: 'Passed',
          data: [69, 75, 56, 40, 62, 55],
          backgroundColor: "green",
          borderColor: "green",
          borderWidth: 1
        },
        {
          label: 'Failed',
          data: [19, 27, 25, 6, 10, 5],
          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 1
        },
      {
        label: 'Blocked',
        data: [18, 11, 19, 1, 15, 10],
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1
      },
      {
        label: 'Not Run',
        data: [25, 35, 12, 17, 23, 30],
        backgroundColor: "grey",
        borderColor: "grey",
        borderWidth: 1
      }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
