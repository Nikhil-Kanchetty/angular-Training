import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAttendenceComponent } from './user-attendence/user-attendence.component';

// Creating the routes for navigating between components
const routes: Routes = [ 
  { path:'home', component:HomepageComponent },
  { path:'userdashboard', component: UserDashboardComponent },
  { path:'userAttendence', component: UserAttendenceComponent},
  { path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }