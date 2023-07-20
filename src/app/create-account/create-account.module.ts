import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared.module';
import { SigninComponent } from '../signin/signin.component';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { FormDataService } from '../form-data.service';
import { StaffOrStudentComponent } from '../staff-or-student/staff-or-student.component';




@NgModule({
  declarations: [
    CreateAccountComponent,
    SigninComponent,
    SigninDialogComponent,
    StaffOrStudentComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers:[FormDataService]
})
export class CreateAccountModule { }
