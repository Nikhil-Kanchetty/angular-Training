import { Component } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'dashboard';

  // creating a array to store the data fetched by the service
  public userData = [];
  constructor(private _userData: DbService) {}

  ngOnInit() {
  
  // Calling the service and mapping the data to an array
  this.userData = this._userData.getUserData();
  console.log("Fetching the detais from the service.....");

  // Storing the userdata in local storage
  localStorage.setItem('0', JSON.stringify(this.userData));
  console.log("Pushing the data to local storage....");

  }

}
