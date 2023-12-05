import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit{

  //only show the landing page if the user is logged in
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.isAutheresied().then((result: boolean) => {
      if (result) {
        console.log("User is Autheresied");
      } else {
        console.log("User is not Autheresied");
        this.apiService.navigateToLogin();
      }
    });

  }
  

}
