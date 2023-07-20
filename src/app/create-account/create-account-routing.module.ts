import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account.component';
import { SigninComponent } from '../signin/signin.component';
import { StaffOrStudentComponent } from '../staff-or-student/staff-or-student.component';

const routes: Routes = [
  { path: '', component: CreateAccountComponent },
  {path:'signin',component:SigninComponent},
  {path:'staff',component:StaffOrStudentComponent}
  // Other routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccountRoutingModule { }
