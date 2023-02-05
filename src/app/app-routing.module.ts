import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { CreatestudentsComponent } from './components/createstudents/createstudents.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:"createstudents", component:CreatestudentsComponent},
    {path:"allstudents", component:AllstudentsComponent},
    {path:"studentdetails/:id", component:StudentDetailsComponent},
    {path:"edit-student/:id", component:CreatestudentsComponent},
  ]},
  {path:"", component:LoginComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
