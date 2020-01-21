import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddempComponent } from './components/addemp/addemp.component';
import { EditempComponent } from './components/editemp/editemp.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'emp', component: EmployeeComponent},
  {path:'emp/add-emp', component:AddempComponent},
  {path: 'emp/edit-emp/:id', component:EditempComponent},
  {path: 'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
