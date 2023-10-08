import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myChart = new Chart("chrt", {
      type: 'bar',
      data: {
        labels: ['G4-Connect', 'G4-Viewer Plus', 'HealthCheck', 'ELIPS', 'AI Dashcam', 'TIMS'],
        datasets: [{
          label: 'Passed',
          data: [89, 78, 56, 40, 75, 55],
          backgroundColor: "green",
          borderColor: "green",
          borderWidth: 1
        },
        {
          label: 'Failed',
          data: [4, 8, 25, 6, 10, 5],
          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 1
        },
      {
        label: 'Blocked',
        data: [3, 5, 19, 1, 15, 10],
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1
      },
      {
        label: 'Not Run',
        data: [4, 3, 12, 17, 0, 30],
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
