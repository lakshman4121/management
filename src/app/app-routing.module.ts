import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentdetailsComponent } from './allstudentdetails/allstudentdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentService } from './student.service';
import { StudentformComponent } from './studentform/studentform.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'studentform',component:StudentformComponent},
    {path:'allstudentdetails',component:AllstudentdetailsComponent}
    
  ]
},
{path:'',component:LoginComponent},
{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
