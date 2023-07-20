import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  registrationForm: FormGroup;
  userValues: any;
  details: any[] = [{
    regno:22222,
    name: 'shilpa',
    email: 'shilpa@gmail.com',
    department: 'mca',
    mobileNumber: 9944206367,
    address: 'Thally',
    role: 'student',
  

  }, {
    regno:9766,
    name: 'shilpa',
    email: 'shilpa@gmail.com',
    department: 'mca',
    mobileNumber: 9944206367,
    address: 'Thally',
    role: 'student',
 
  }];
  username!: string;
  userEmail!: string;
  userDepartment!: string;
  userRegNo!: string;
  userMobile!:string;
  address!:string;
  role!:string;
  body={};
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog,private apiservice:ApiService) {
    this.registrationForm = this.formBuilder.group({
      regno:['',Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required],
 
    });
  }
  submitForm() {
    if (this.registrationForm.valid) {
      this.username = this.registrationForm.controls['name'].value;
      this.userRegNo = this.registrationForm.controls['regno'].value;
      this.userDepartment = this.registrationForm.controls['department'].value;
      this.userEmail = this.registrationForm.controls['email'].value;
      this.address = this.registrationForm.controls['address'].value;
      this.userMobile = this.registrationForm.controls['mobileNumber'].value;
      this.role = this.registrationForm.controls['role'].value;
      this.details.push({ name: this.username, email: this.userEmail });
  
      const body = {
        reg_no: this.userRegNo,
        f_name: this.username,
        email_id: this.userEmail,
        dept: this.userDepartment,
        mobile_no: this.userMobile,
        address: this.address,
        staff_student: this.role
      };
  
      this.apiservice.postingUsers(body ).subscribe(
        (response) => {
          // Success callback function
          console.log('Response:', response);
          // Handle the response or perform any other actions
        },
        (error) => {
          // Error callback function
          console.error('Error:', error);
          // Handle the error or display an error message
        }
      );
    }
  }
  
  closeDialog() {
    // this.dialogRef.close();
    const dialogRef = this.dialog.closeAll()
  }
  openSignInDialog() {
    const dialogRef = this.dialog.open(SigninDialogComponent, {
      width: '500px',
    // Add a custom CSS class for the dialog box
      // Add any additional options or configurations for the dialog box
    });
  
    // Handle any actions or data from the dialog box when it is closed
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result or perform any desired actions
      console.log(result);
    });
  }
  
  
  
  ngOnInit(): void {

  }
}
