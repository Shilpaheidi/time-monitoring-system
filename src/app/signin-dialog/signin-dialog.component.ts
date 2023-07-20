import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.scss']
})
export class SigninDialogComponent {
  signIn: FormGroup;
  details: any;

  username: any;
  userRegNo: any;
  userRoll: any;
  userdept: any;
  routerLinkValue: string = '';
  constructor(private formBuilder: FormBuilder,
    private createaccount: CreateAccountComponent,
    private signinDataService: FormDataService,
    private router: Router,
    private apiservice: ApiService,
    private sharedata: SharedService) {
    this.signIn = this.formBuilder.group({
      regno: ['', Validators.required],
      name: ['', Validators.required],

      role: ['', [Validators.required,]],
      department: ['', [Validators.required,]],

    });
  }
  submitForm() {
    this.userRegNo = this.signIn.controls['regno'].value;
    this.username = this.signIn.controls['name'].value;
    this.userRoll = this.signIn.controls['role'].value;
    this.userdept = this.signIn.controls['department'].value;
    this.apiservice.checkingUsers(this.signIn.controls['regno'].value,
      this.signIn.controls['name'].value,
      this.signIn.controls['department'].value,
      this.signIn.controls['role'].value).subscribe((res) => {
        console.log('res', res);

        this.sharedata.addUser = res?.data[0];
        // this.sharedata.name = res?.data[0].f_name;

        if (this.signIn.valid 
          && res?.data[0].reg_no == this.signIn.controls['regno'].value 
          && res?.data[0].f_name == this.signIn.controls['name'].value
          && res?.data[0].dept == this.signIn.controls['department'].value
          && res?.data[0].staff_student == this.signIn.controls['role'].value) {

          this.router.navigateByUrl('/signin');
        }
 

      })


  }











  dialogclose() {
    this.createaccount.closeDialog();
  }
  ngOnInit() {



  }
}
