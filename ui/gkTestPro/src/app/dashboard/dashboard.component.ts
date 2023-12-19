import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {

    this.apiService.isAutheresied().then((result: boolean) => {

      if (result) {

        const myChart = new Chart("chrt", {
          type: 'bar',
          data: {
            labels: ['G4-Connect', 'G4-Viewer Plus', 'HealthCheck', 'ELIPS', 'AI Dashcam', 'TIMS'],
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

      } else {
        this.apiService.navigateToLogin();
      }
    });
  }

  toAddProject() {
    this.apiService.toAddProject();
  }


}
