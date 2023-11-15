import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  id: string = "";
  role: string = "";

  rawData: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {

  }

  onSubmit(form: any) {

    try {
      // Check if passwords match
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      // Password must be at least 6 characters
      if (this.password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
      }
  
      // Check if email is valid
      if (!this.validateEmail(this.email)) {
        alert("Invalid email!");
        return;
      }
  
      if (form.valid) {
        var user: User = {
          id: this.id,
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        }
  
        // Use 'await' only if 'this.apiService.addUser' returns a promise
        this.apiService.addUser(user).subscribe(
          (data: any) => {
            // Display success message in an alert
            alert("Success: " + data.msg); // Assuming the success message is in the 'message' property
            this.toSettings();
          },
          (error: any) => {
            // Handle errors here
            console.log("Error:", error);
  
            // Display the error message in an alert for both success and error cases
            alert("Error: " + error.error.msg); // Assuming the error message is in the 'message' property
          }
        );
      }
  
    } catch (error) {
      console.log("catch");
      console.log(error);
    }
  }
  

  validateEmail(email: string): boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  toSettings(): void {
    this.apiService.navigateToSettings();
  }


}
