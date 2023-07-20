// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { SigninDialogComponent } from './signin-dialog/signin-dialog.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormDataService } from './form-data.service';
import { SigninComponent } from './signin/signin.component';


import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // Remove CreateAccountComponent from here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CreateAccountModule,

    CommonModule
  ],
  providers: [SigninDialogComponent,CreateAccountComponent,FormDataService,SigninComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
