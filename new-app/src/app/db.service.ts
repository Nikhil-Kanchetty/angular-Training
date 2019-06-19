import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  // Creating a method to serve data using angular db service
  getUserData(){
    return [
      {"id":0, "name":"Tony", "age":30, "attendence":"80%", "userStatus":false},
      {"id":1, "name":"Brad", "age":29, "attendence":"90%", "userStatus":false},
      {"id":2, "name":"Coup", "age":36, "attendence":"60%", "userStatus":false},
      {"id":3, "name":"Sony", "age":25, "attendence":"40%", "userStatus":false}
    ];
  }
}
