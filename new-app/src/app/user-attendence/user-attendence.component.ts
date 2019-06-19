import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-attendence',
  templateUrl: './user-attendence.component.html',
  styleUrls: ['./user-attendence.component.css']
})

export class UserAttendenceComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  // To store user id 
  userId: number = 0;

  // Creating the arrays to store the data got by the service 
  public userData = [];
  public userDataById =[];

  ngOnInit() {

    // Fetching the user data from local storage
    this.userData = JSON.parse(localStorage.getItem('0'));

    // Fetching the user id from the router params 
    this.userId = this.route.snapshot.params['id'];

    // Using a for loop to transfer the items in the userData array to userDataById array excluding the item with the id.
    for(let item of this.userData){
      if(item.id == this.userId){
        continue;
      }
      this.userDataById.push(item);
    }
  }  

}
