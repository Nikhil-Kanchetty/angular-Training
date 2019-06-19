import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  // Creating the variables
  userStatus: string = "";
  userId: number = 0;
  userAge: number = 0;
  userName: string = "";
  userAttendence: string = "";
  isUserStatus: boolean = false;
  isbtnStatus: boolean = false;

  // Creating the arrays to store the data got by the service 
  public userData = [];
  public userDataById = [];

  ngOnInit() {
    
    // Fetching the user data from local storage
    this.userData = JSON.parse(localStorage.getItem('0'));

    // Fetching the user id from the router params 
    this.userId = this.route.snapshot.params['id'];

    // Fetching the required data from the service using the Id.
    this.userDataById  = this.userData.filter(x=>(x.id == this.userId));

    // Assigning the values to respective variable for representation 
    this.userName = this.userDataById[0]['name'];
    this.userAge = this.userDataById[0]['age'];
    this.userAttendence = this.userDataById[0]['attendence'];
    this.isUserStatus = this.userDataById[0]['userStatus'];
    this.isbtnStatus = this.isUserStatus;
    
  }
  
  // Creating the method to toggle the user Status to working or non working flags
  changeAttendenceStatus(): void {
    
    // Setting the status of the button to true or false
    this.isbtnStatus = !this.isbtnStatus; 

    // Toggle the user status based on the state of the button
    if(this.isbtnStatus){
      this.userStatus = "Working";
      this.userData[this.userId].userStatus = this.isbtnStatus;
      localStorage.setItem("0", JSON.stringify(this.userData));
    } else {
      this.userStatus  = "Not Working";
      this.userData[this.userId].userStatus = this.isbtnStatus;
      localStorage.setItem("0", JSON.stringify(this.userData));
    }

  }
  
}
