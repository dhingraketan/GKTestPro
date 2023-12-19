import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  id: string = "";
  password: string = "";

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.isAutheresied().then((result: boolean) => {
      if (result) {
        this.apiService.navigateToDash();
      }
    });
  }

  login(){
    var credentials = {
      id: this.id,
      password: this.password
    }

    this.apiService.login(credentials).subscribe(
      (data: any) => {
        console.log("login success");
        
        //store the data in local storage
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        //redirect to landing page
        this.apiService.navigateToDash();

      },
      (error: any) => {
        alert("Login failed!");
      }
    );
  }

}
