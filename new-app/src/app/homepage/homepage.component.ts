import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  // creating a array to store the data fetched by the service
  public userData = [];
  constructor() { }

  ngOnInit() {
    
    // Calling the service and mapping the data to an array
    this.userData =  JSON.parse(localStorage.getItem('0'));

  }

}
