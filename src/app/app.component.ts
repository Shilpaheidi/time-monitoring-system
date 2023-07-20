import { Component } from '@angular/core';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Timemonitoring-system';
  regno = '';
constructor(private signin:SigninComponent){}
  ngOnInit(){

  }

  ngAfterViewInit(){
  //   this.regno = this.signin.regno;
  //   console.log(this.regno);
    
  //      sessionStorage.setItem('regno', this.regno);
  }
}
