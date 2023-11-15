import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  id: string = "";
  role: string = "";

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
      
  }

  onSubmit(form: any): void{
    //check if passwords match
    if(this.password != this.confirmPassword){
      alert("Passwords do not match!");
      return;
    }

    //password must be at least 6 characters
    if(this.password.length < 6){
      alert("Password must be at least 6 characters!");
      return;
    }

    //check if email is valid
    if(!this.validateEmail(this.email)){
      alert("Invalid email!");
      return;
    }

    if(form.valid){
      var userInfo = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      }
      this.apiService.addUser(userInfo);

    
    }

  }

  validateEmail(email: string): boolean{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  toSettings(): void{
    this.apiService.navigateToSettings();
  }
  

}
