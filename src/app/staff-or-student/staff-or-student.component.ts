import { Component, OnInit } from '@angular/core';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { FormDataService } from '../form-data.service';
import { SharedService } from '../shared/services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

declare let Email: any;

@Component({
  selector: 'app-staff-or-student',
  templateUrl: './staff-or-student.component.html',
  styleUrls: ['./staff-or-student.component.scss']
})
export class StaffOrStudentComponent {
  user:any[] = [];
  deptmessage: FormGroup;
  constructor(private logindetails: SigninDialogComponent,
    private signinDataService: FormDataService,
    private shareddata: SharedService,
    private formBuilder: FormBuilder) {
    this.deptmessage = this.formBuilder.group({
      regno:['',Validators.required],
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.user = this.shareddata.users;
    // this.name = this.shareddata.name;
    // const responseData  = this.shareddata.getData();
    // console.log(responseData?.data[0].f_name);
    console.log(this.shareddata.users);
    // console.log(this.shareddata.name);
    // this.regno =  responseData?.data[0].reg_no;
    // this.name =  responseData?.data[0].f_name;
    // this.signinDataService.getSignInData().subscribe(data => {
    //   this.signInData = data;
    //   console.log('this.signInData:', this.signInData);
    //   console.log('this.signInData:', this.signInData.regno);

    //   this.regno = this.signInData.regno;
    //   // sessionStorage.setItem('regno', this.regno);

    //   // const regno = sessionStorage.getItem('regno');
    //   // if (regno) {
    //   //   this.regno = regno;
    //   // }
    // });



  }

  // sendMail(params: any){
  //   let values = {
  //     name: this.deptmessage.controls['name'].value,
  //     email: this.deptmessage.controls['email'].value,
  //     message: this.deptmessage.controls['message'].value
  //   }

  //   const serviceID = "service_xlaelzc";
  //   const templateId = "template_b5s0m2k";
   
  // }

  // public sendEmail(e: Event) {
  //   e.preventDefault();
  //   emailjs.sendForm('service_xlaelzc', 'template_b5s0m2k', e.target as HTMLFormElement, '5rPQKEi1YHHRAL8EY')
  //     .then((result: EmailJSResponseStatus) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }


  sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shilpaheidi777@gmail.com",
      Password: "ECE65089B30EA9EFE4C3BEBFBE346D282DA7",
      To: this.deptmessage.controls['email'].value,
      From: 'shilpaheidi777@gmail.com',
      message: this.deptmessage.controls['message'].value,
      Subject: this.deptmessage.controls['subject'].value,
      Body: "Name: " + this.deptmessage.controls['name'].value + "\n\n" +
            "Message: " + this.deptmessage.controls['message'].value + "\n\n" +
            "Time: " + this.getCurrentDateTime()
    }).then((message: any) => alert(message));

    this.deptmessage.reset();
  }
  
  

getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString();
}
}
